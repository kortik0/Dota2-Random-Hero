import { Button } from "@mui/material"
import clsx from "clsx"

export const SelectButton = ({
  selectedData,
  clickHandler,
  data,
  style,
  attached,
}) => {
  return (
    <Button
      className={clsx({
        Selected: selectedData?.attached?.includes(data),
      })}
      onClick={(e) => clickHandler(data, e.target.name)}
      style={style}
      value={data}
      name={attached}
    >
      {data}
    </Button>
  )
}
