import {
  Button,
  ButtonGroup,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material"
import { useEffect, useState } from "react"
import { SelectButton } from "./SelectButton"

function DialogContentGenerator({
  clickHandler,
  currentSelected,
  currentContent,
}) {
  //V0.5 = attributes, roles, attack_type
  const attributes = ["Strength", "Agility", "Intelligence"]
  const roles = [
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
  const attack_type = ["Melee", "Range"]

  const selectClickHandler = (data, attachedSection) => {
    clickHandler({
      ...currentSelected,
      [attachedSection]: [...currentSelected[attachedSection], data],
    })
  }

  return (
    <>
      <DialogContentText key={`${currentContent}_Modal_Content`}>
        {currentContent}
      </DialogContentText>
      <ButtonGroup
        key={`${currentContent}_Button_Group`}
        variant="outlined"
        aria-label="outlined primary button group"
      >
        {currentContent === "Attributes" &&
          attributes.map((attribute) => (
            <SelectButton
              key={`${attribute}_${currentContent}_button`}
              selectedData={currentSelected}
              clickHandler={selectClickHandler}
              data={attribute}
              attached={"attributes"}
            />
          ))}
        {currentContent === "Roles" &&
          roles.map((role) => (
            <SelectButton
              key={`${role}_${currentContent}_button`}
              selectedData={currentSelected}
              clickHandler={selectClickHandler}
              data={role}
              attached={"roles"}
            />
          ))}
        {currentContent === "Attack type" &&
          attack_type.map((type) => (
            <SelectButton
              key={`${type}_${currentContent}_button`}
              selectedData={currentSelected}
              clickHandler={selectClickHandler}
              data={type}
              attached={"attackType"}
            />
          ))}
      </ButtonGroup>
    </>
  )
}

export const ModalWindow = ({ isOpen, toClose }) => {
  const [selected, setSelected] = useState({
    attributes: [],
    roles: [],
    attackType: [],
  })

  const modalContent = ["Attributes", "Roles", "Attack type"]

  useEffect(() => {
    console.log(selected)
  }, [selected])

  return (
    <Dialog open={isOpen} onClose={toClose}>
      <DialogTitle>Advanced options</DialogTitle>
      <DialogContent>
        {modalContent.map((content) => (
          <DialogContentGenerator
            key={content}
            clickHandler={setSelected}
            currentSelected={selected}
            currentContent={content}
          />
        ))}
      </DialogContent>
    </Dialog>
  )
}
