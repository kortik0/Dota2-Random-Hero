import { DialogContentText } from "@mui/material"
import { SelectButton } from "./SelectButton"
import data from "./ModalData/advancedData.json"
import { Group } from "@mantine/core"

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
    console.log(currentSelected, attachedSection, value)
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
      <Group>
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
      </Group>
    </>
  )
}
