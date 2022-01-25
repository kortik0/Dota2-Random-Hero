import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Switch,
} from "@mui/material"
import { useEffect, useState } from "react"
import { Button } from "../Button/Button"
import { DialogContentWorker } from "./DialogContentWorker"
import jsonData from "./ModalData/advancedData.json"
import { getRandomNumber } from "../../utility/getRandomNumber"

export const ModalWindow = ({ isOpen, toClose, setRandom, data }) => {
  const { initialAttributes, initialAttackTypes, initialRoles } = {
    ...jsonData,
  }

  //V0.5 - is needed
  const [isNeed, changeIsNeed] = useState(false)
  const [selected, setSelected] = useState({
    attributes: [],
    roles: [],
    attackType: [],
  })

  const modalContent = ["Attributes", "Roles", "Attack type"]

  const changeHandler = () => {
    changeIsNeed(!isNeed)
  }

  const clickHandler = () => {
    const [{ attributes, roles, attackType }] = [selected]

    const filterAttributes = attributes.length ? attributes : initialAttributes
    const filterAttackType = attackType.length ? attackType : initialAttackTypes
    const filterRoles = roles.length ? roles : initialRoles

    const filteredHero = data.filter(
      (hero) =>
        filterAttributes.some((attr) => hero.primary_attr === attr) &&
        filterAttackType.some((type) => hero.attack_type === type) &&
        filterRoles.some((role) => hero.roles.includes(role))
    )

    const id = getRandomNumber(filteredHero.length)

    setRandom({
      name: filteredHero[id].localized_name,
      attackType: filteredHero[id].attack_type,
      roles: filteredHero[id].roles,
      id: filteredHero[id].id,
    })

    toClose()

    console.log(
      data.filter(
        (hero) =>
          filterAttributes.some((attr) => hero.primary_attr === attr) &&
          filterAttackType.some((type) => hero.attack_type === type) &&
          filterRoles.some((role) => hero.roles.includes(role))
      )
    )
  }

  useEffect(() => {
    console.log(selected)
  }, [selected])

  return (
    <Dialog open={isOpen} onClose={toClose}>
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
        <DialogTitle>Advanced options</DialogTitle>
        <FormControlLabel
          value="Allow you to select several options"
          control={<Switch color="primary" onChange={changeHandler} />}
          label="Allow you to select several options"
          labelPlacement="end"
        />
      </Box>
      <DialogContent>
        {modalContent.map((content) => (
          <DialogContentWorker
            key={content}
            clickHandler={setSelected}
            currentSelected={selected}
            currentContent={content}
            isNeed={isNeed}
          />
        ))}
        <br />
        <Button
          action={clickHandler}
          styles={{ width: "165px", marginTop: "15px" }}
        >
          Random with this params
        </Button>
      </DialogContent>
    </Dialog>
  )
}
