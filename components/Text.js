import { Text as Typography } from "@mantine/core"

export const Text = ({
  children,
  variant = "md",
  color = "#457b9d",
  styles,
}) => {
  return (
    <Typography
      style={{ color: color, fontFamily: "Nunito", ...styles }}
      size={variant}
    >
      {children}
    </Typography>
  )
}
