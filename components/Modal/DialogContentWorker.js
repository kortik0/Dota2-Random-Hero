import { ButtonGroup, DialogContentText } from "@mui/material"
import { SelectButton } from "./SelectButton"
import data from "./ModalData/advancedData.json"

export const DialogContentWorker = ({
  clickHandler,
  currentSelected,
  currentContent,
  isNeed,
}) => {
  const {
    initialAttributes,
    initialAttackTypes,
    initialRoles,
    initialShorthandAttributes,
  } = { ...data }

  const selectClickHandler = (value, attachedSection) => {
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
          initialAttributes.map((attribute, index) => (
            <SelectButton
              key={`${attribute}_${currentContent}_button`}
              selectedData={currentSelected}
              clickHandler={selectClickHandler}
              data={attribute}
              value={initialShorthandAttributes[index]}
              attached={"attributes"}
            />
          ))}
        {currentContent === "Roles" &&
          initialRoles.map((role, index) => (
            <SelectButton
              key={`${role}_${currentContent}_button`}
              selectedData={currentSelected}
              clickHandler={selectClickHandler}
              data={role}
              value={initialRoles[index]}
              attached={"roles"}
            />
          ))}
        {currentContent === "Attack type" &&
          initialAttackTypes.map((type, index) => (
            <SelectButton
              key={`${type}_${currentContent}_button`}
              selectedData={currentSelected}
              clickHandler={selectClickHandler}
              data={type}
              value={initialAttackTypes[index]}
              attached={"attackType"}
            />
          ))}
      </ButtonGroup>
    </>
  )
}
