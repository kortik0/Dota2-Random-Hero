import { Typography } from "@mui/material"

export const Text = ({
  children,
  variant = "body1",
  color = "#457b9d",
  styles,
}) => {
  //Probably don't use variant >= h2
  return (
    <Typography style={{ color: color, ...styles }} variant={variant}>
      {children}
    </Typography>
  )
}
