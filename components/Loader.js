import { Box } from "@mui/material"
import { Text } from "./Text"

export const Loader = () => {
  return (
    <Box
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignContent={"center"}
      alignItems={"center"}
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
      <br />
      <Text color={"#f1faee"}> Please wait until the end of the download!</Text>
    </Box>
  )
}
