import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Switch,
} from "@mui/material"
import { Button } from "../Button/Button"
import { DialogContentWorker } from "./DialogContentWorker"
import { useEffect, useState } from "react"

export const ModalWindow = ({ isOpen, toClose, data }) => {
  /*THIS IS PROBABLY TEST*/
  const initialAttribute = ["str", "agi", "int"]
  const initialRole = [
    "Carry",
    "Escape",
    "Nuker",
    "Initiator",
    "Durable",
    "Disabler",
    "Jungler",
    "Support",
    "Pusher",
  ]
  const initialAttackType = ["Melee", "Ranged"]
  /*THIS IS PROBABLY TEST*/

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

    const filterAttributes = attributes.length ? attributes : initialAttribute
    const filterAttackType = attackType.length ? attackType : initialAttackType
    const filterRoles = roles.length ? roles : initialRole

    //TODO: Think about how to set and get randomed data

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
