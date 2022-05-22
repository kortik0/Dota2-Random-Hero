import { Button } from "@mantine/core"
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
      onClick={() => clickHandler(value, attached)}
      style={style}
      value={value}
      variant={"outline"}
    >
      {data}
    </Button>
  )
}
