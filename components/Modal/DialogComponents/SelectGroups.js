import React from "react"
import data from "../ModalData/advancedData.json"
import dynamic from "next/dynamic"

const MultiSelect = dynamic(() =>
  import("@mantine/core").then((m) => m.MultiSelect)
)
const Select = dynamic(() => import("@mantine/core").then((m) => m.Select))

const SelectedGroups = ({ isNeed, currentSelected, clickHandler }) => {
  const { initialAttributes, initialAttackTypes, initialRoles } = { ...data }

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

  return isNeed === false ? (
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
  )
}

export default SelectedGroups
