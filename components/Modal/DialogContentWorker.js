import { ButtonGroup, DialogContentText } from "@mui/material"
import { SelectButton } from "./SelectButton"

export const DialogContentWorker = ({
  clickHandler,
  currentSelected,
  currentContent,
  isNeed,
}) => {
  //V0.5 = attributes, roles, attack_type
  const attributes = ["Strength", "Agility", "Intelligence"]
  const attributeShorthand = ["str", "agi", "int"]
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
  const attack_type = ["Melee", "Ranged"]

  const selectClickHandler = (value, attachedSection) => {
    console.log(value)

    clickHandler({
      ...currentSelected,
      [attachedSection]: currentSelected[attachedSection].includes(value)
        ? currentSelected[attachedSection].filter(
            (element) => element !== value
          )
        : isNeed
        ? [...currentSelected[attachedSection], value]
        : [value],
    }) //rewrite or make something, idk
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
          attributes.map((attribute, index) => (
            <SelectButton
              key={`${attribute}_${currentContent}_button`}
              selectedData={currentSelected}
              clickHandler={selectClickHandler}
              data={attribute}
              value={attributeShorthand[index]}
              attached={"attributes"}
            />
          ))}
        {currentContent === "Roles" &&
          roles.map((role, index) => (
            <SelectButton
              key={`${role}_${currentContent}_button`}
              selectedData={currentSelected}
              clickHandler={selectClickHandler}
              data={role}
              value={roles[index]}
              attached={"roles"}
            />
          ))}
        {currentContent === "Attack type" &&
          attack_type.map((type, index) => (
            <SelectButton
              key={`${type}_${currentContent}_button`}
              selectedData={currentSelected}
              clickHandler={selectClickHandler}
              data={type}
              value={attack_type[index]}
              attached={"attackType"}
            />
          ))}
      </ButtonGroup>
    </>
  )
}
