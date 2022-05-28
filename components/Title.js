import { Title as Typography } from "@mantine/core"

const Title = ({ children, order = 1, color = "#457b9d", styles }) => {
  return (
    <Typography
      style={{ color: color, fontFamily: "Nunito", ...styles }}
      order={order}
    >
      {children}
    </Typography>
  )
}

export default Title
