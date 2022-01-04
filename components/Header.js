import { Box } from "@mui/material"
import { Text } from "./Text"

export function Header() {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      mt={"10px"}
    >
      <Text color={"#f1faee"} variant={"h3"}>
        DOTA 2 RANDOM
      </Text>
    </Box>
  )
}
