import {
  Button,
  ButtonGroup,
  DialogContentText,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material"
import { useEffect, useState } from "react"
import clsx from "clsx"

export const Modal = ({ isOpen, toClose }) => {
  const [selected, setSelected] = useState({})
  const attributes = ["Strength", "Agility", "Intelligence"]

  const selectClickHandler = (e, attribute, i) => {
    Object.keys(selected).length
      ? e.target.parentElement.children[selected.index].classList.remove(
          "Selected"
        )
      : null

    e.target.classList.add("Selected")
    console.log(e.target)
    setSelected({ name: attribute, index: i })
  }

  useEffect(() => {
    console.log(selected)
  }, [selected])

  return (
    <Dialog open={isOpen} onClose={toClose}>
      <DialogTitle>Advanced options</DialogTitle>
      <DialogContent>
        <DialogContentText>Attribute</DialogContentText>
        <ButtonGroup
          variant="outlined"
          aria-label="outlined primary button group"
        >
          {attributes.map((attr, i) => (
            <Button
              key={`${attr}_${i}`}
              className={clsx({ Selected: selected.name === attr })}
              onClick={(e) => selectClickHandler(e, attr, i)}
            >
              {attr}
            </Button>
          ))}
        </ButtonGroup>
      </DialogContent>
    </Dialog>
  )
}
