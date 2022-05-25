import { SelectButton } from "./SelectButton"
import data from "./ModalData/advancedData.json"
import { Group } from "@mantine/core"
import dynamic from "next/dynamic"
import React from "react"

const Select = dynamic(() =>
  import("@mantine/core").then((elem) => elem.Select)
)
const MultiSelect = dynamic(() =>
  import("@mantine/core").then((elem) => elem.MultiSelect)
)

export const DialogContentWorker = ({
  clickHandler,
  currentSelected,
  isNeed,
  isMobile,
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

  const roleWriter = (value) => {
    return value.map((element) => {
      switch (element) {
        case "int":
          return "Intelligence"
        case "agi":
          return "Agility"
        case "str":
          return "Strength"
      }
    })
  }

  const onChangeMobile = (value, type) => {
    clickHandler({
      ...currentSelected,
      [type]:
        type === "attributes"
          ? value.map((string) => string.slice(0, 3).toLowerCase())
          : value,
    })
  }

  const modalContent = ["Attributes", "Roles", "Attack type"]

  return (
    <>
      {!isMobile ? (
        modalContent.map((currentContent, index, array) => (
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
      ) : isNeed === false ? (
        <>
          <Select
            label={"Attributes"}
            value={currentSelected.attributes}
            onChange={(value) => onChangeMobile([value], "attributes")}
            data={initialAttributes}
          />
          <Select
            label={"Roles"}
            onChange={(value) => onChangeMobile([value], "roles")}
            data={initialRoles}
            value={currentSelected.roles}
          />
          <Select
            label={"Attack Type"}
            onChange={(value) => onChangeMobile([value], "attackType")}
            data={initialAttackTypes}
            value={currentSelected.attackType}
          />
        </>
      ) : (
        <>
          <MultiSelect
            label={"Attributes"}
            value={roleWriter(currentSelected.attributes)}
            onChange={(value) => onChangeMobile(value, "attributes", true)}
            data={initialAttributes}
          />
          <MultiSelect
            label={"Roles"}
            value={currentSelected.roles}
            onChange={(value) => onChangeMobile(value, "roles", true)}
            data={initialRoles}
          />
          <MultiSelect
            label={"Attack Type"}
            value={currentSelected.attackType}
            onChange={(value) => onChangeMobile(value, "attackType", true)}
            data={initialAttackTypes}
          />
        </>
      )}
    </>
  )
}
