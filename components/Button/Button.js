import { Button as MuiButton } from "@mui/material"

export const Button = ({ action, styles, children }) => {
  return (
    <MuiButton
      onClick={action}
      variant={"outlined"}
      color={"btnColor"}
      disableElevation
      style={{ marginRight: "20px", ...styles }}
    >
      {children}
    </MuiButton>
  )
}
