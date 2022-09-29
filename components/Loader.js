import { Box } from "@mui/material"
import { Text } from "./Text"
import { Copyright } from "./Copyright"
import Title from "./Title"
import React from "react"

export const Loader = () => {
  return (
    <>
      <Title
        order={1}
        styles={{
          display: "none",
          position: "absolute",
          justifyContent: "center",
          fontSize: 24,
        }}
      >
        RANDOM YOUR NEXT DOTA 2 HERO!
      </Title>
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
