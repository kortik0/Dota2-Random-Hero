import React from "react"
import dynamic from "next/dynamic"
const DialogButtonGroup = dynamic(() =>
  import("./DialogComponents/DialogButtonGroup")
)
const SelectGroups = dynamic(() => import("./DialogComponents/SelectGroups"))

export const DialogContentWorker = ({
  clickHandler,
  currentSelected,
  isNeed,
  isMobile,
}) => {
  const modalContent = ["Attributes", "Roles", "Attack type"]

  return (
    <>
      {!isMobile ? (
        <DialogButtonGroup
          modalContent={modalContent}
          currentSelected={currentSelected}
          clickHandler={clickHandler}
          isNeed={isNeed}
        />
      ) : (
        <SelectGroups
          currentSelected={currentSelected}
          isNeed={isNeed}
          clickHandler={clickHandler}
        />
      )}
    </>
  )
}
