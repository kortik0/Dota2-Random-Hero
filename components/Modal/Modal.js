import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Switch,
} from "@mui/material"
import { useState } from "react"
import { Button } from "../Button/Button"
import { MyImage } from "../Image"
import { DialogContentWorker } from "./DialogContentWorker"
import jsonData from "./ModalData/advancedData.json"
import { Text } from "../Text"
import { AnimatePresence, motion } from "framer-motion"

import { randomHero, useStore } from "../../store/store"

export const ModalWindow = ({ isOpen, toClose, data }) => {
  const { randomed } = useStore()

  const { initialAttackTypes, initialRoles, initialShorthandAttributes } = {
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

    const filterAttributes = attributes.length
      ? attributes
      : initialShorthandAttributes
    const filterAttackType = attackType.length ? attackType : initialAttackTypes
    const filterRoles = roles.length ? roles : initialRoles

    const filteredHero = data.filter(
      (hero) =>
        filterAttributes.some((attr) => hero.primary_attr === attr) &&
        filterAttackType.some((type) => hero.attack_type === type) &&
        filterRoles.some((role) => hero.roles.includes(role))
    ) //I need to optimize this some day

    randomHero(filteredHero)
  }

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
        <div style={{ display: "flex" }}>
          <Button
            action={clickHandler}
            styles={{ width: "165px", marginTop: "15px" }}
          >
            Random with this params
          </Button>
        </div>

        {Object.keys(randomed).length ? (
          <>
            <Text>Your heroes for this time is: {randomed.localized_name}</Text>
            <AnimatePresence>
              <motion.div
                key={randomed.name}
                initial={"hiddenHero"}
                animate={"animatedHero"}
                exit={"leaveHero"}
                style={{ position: "relative" }}
                variants={{
                  hiddenHero: {
                    left: "-300px",
                    display: "none",
                  },
                  animatedHero: {
                    left: 0,
                    display: "initial",
                    transition: {
                      duration: 0.7,
                    },
                  },
                  leaveHero: {
                    bottom: "-300px",
                    transition: {
                      duration: 0.2,
                    },
                  },
                }}
              >
                <MyImage hero={randomed} />
              </motion.div>
              {randomed.caution ? (
                <Text>
                  With these options, only 1 hero is possible to be randomized!
                  If you want a more pool, select or turn off some options.
                </Text>
              ) : null}
            </AnimatePresence>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
