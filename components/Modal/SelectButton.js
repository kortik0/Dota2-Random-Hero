import { Button } from "@mui/material"
import clsx from "clsx"

export const SelectButton = ({
  selectedData,
  clickHandler,
  data,
  value,
  style,
  attached,
}) => {
  return (
    <Button
      className={clsx({
        Selected: selectedData[attached]?.includes(value),
      })}
      onClick={(e) => clickHandler(value, e.target.name)}
      style={style}
      value={value}
      name={attached}
    >
      {data}
    </Button>
  )
}
