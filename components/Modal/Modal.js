import { DialogContent } from "@mui/material"
import React, { useState } from "react"
import dynamic from "next/dynamic"
import { Button } from "../Button/Button"
import { MyImage } from "../Image"
import { DialogContentWorker } from "./DialogContentWorker"
import jsonData from "./ModalData/advancedData.json"
import { Text } from "../Text"
import { AnimatePresence, motion } from "framer-motion"
const Modal = dynamic(() => import("@mantine/core").then((elem) => elem.Modal))
const Switch = dynamic(() =>
  import("@mantine/core").then((elem) => elem.Switch)
)

import { randomHero, useStore } from "../../store/store"

export const ModalWindow = ({ isOpen, toClose, data }) => {
  const { randomed, errorMessage } = useStore()

  const { initialAttackTypes, initialRoles, initialShorthandAttributes } = {
    ...jsonData,
  }

  //V0.5 - is needed
  const [isNeed, changeIsNeed] = useState(false) //Is multiselect allowed
  const [isMobile, _] = useState(window.innerWidth <= 768) //768 pixels I think that normal for newest smartphone
  const [selected, setSelected] = useState({
    attributes: [],
    roles: [],
    attackType: [],
  })

  const changeHandler = () => {
    setSelected({
      attributes: [],
      roles: [],
      attackType: [],
    })
    changeIsNeed(!isNeed)
  }

  const clickHandler = () => {
    const [{ attributes, roles, attackType }] = [selected]

    const filterAttributes = attributes.length
      ? attributes
      : initialShorthandAttributes
    const filterAttackType = attackType.length ? attackType : initialAttackTypes
    const filterRoles = roles.length ? roles : initialRoles

    //I need to optimize this some day
    const filteredHero = data.filter(
      (hero) =>
        filterAttributes.some((attr) => hero.primary_attr === attr) &&
        filterAttackType.some((type) => hero.attack_type === type) &&
        filterRoles.some((role) => hero.roles.includes(role))
    )

    randomHero(filteredHero)
  }

  return (
    <>
      {isOpen && (
        <Modal title={"Advanced options"} opened={isOpen} onClose={toClose}>
          <Switch onChange={changeHandler} label="Select multiple options" />
          <DialogContent>
            <DialogContentWorker
              clickHandler={setSelected}
              currentSelected={selected}
              isNeed={isNeed}
              isMobile={isMobile}
            />
            <br />
            <div style={{ display: "flex" }}>
              <Button
                action={clickHandler}
                styles={{ width: "165px", marginTop: "15px" }}
              >
                Random with this params
              </Button>
            </div>

            {Object.keys({ errorMessage }) ? <Text>{errorMessage}</Text> : null}
            {Object.keys(randomed).length ? (
              <>
                <Text>
                  Your heroes for this time is: {randomed.localized_name}
                </Text>
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
                  {randomed.caution && (
                    <Text>
                      With these options, only 1 hero is possible to be
                      randomized! If you want a more pool, select or turn off
                      some options.
                    </Text>
                  )}
                </AnimatePresence>
              </>
            ) : null}
          </DialogContent>
        </Modal>
      )}
    </>
  )
}
