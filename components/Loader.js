import { Box } from "@mui/material"
import { Text } from "./Text"
import { Copyright } from "./Copyright"

export const Loader = () => {
  return (
    <>
      <Box
        height={"95vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <div className="lds-roller">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <Text styles={{ marginLeft: "10px" }} color={"#f1faee"}>
          Please wait until the end of the download!
        </Text>
      </Box>
      <Copyright />
    </>
  )
}
