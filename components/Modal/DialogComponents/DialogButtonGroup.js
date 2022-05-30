import React from "react"
import { Group } from "@mantine/core"
import { SelectButton } from "../SelectButton"
import data from "../ModalData/advancedData.json"

const DialogButtonGroup = ({
  modalContent,
  currentSelected,
  clickHandler,
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

  return modalContent.map((currentContent, index, array) => (
    <div key={`${currentContent}_${index}_${array}`}>
      <h4 key={currentContent}>{currentContent}</h4>
      <Group key={`${currentContent}_${index}`}>
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
    </div>
  ))
}

export default DialogButtonGroup
