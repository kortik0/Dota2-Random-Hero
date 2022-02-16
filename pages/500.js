import { Text } from "../components/Text"
import { Box } from "@mui/material"

export default function CustomPage500() {
  return (
    <Box
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignContent={"center"}
      alignItems={"center"}
    >
      <Box display={"inline-block"}>
        <Text variant={"h3"} styles={{ textAlign: "center" }}>
          500
        </Text>
        <Text variant={"h4"}>
          Seems like something bad errors on Dota 2 API server! We will look how
          fast they fix that!
        </Text>
      </Box>
    </Box>
  )
}
