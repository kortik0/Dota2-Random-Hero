import { Box, Container, Paper } from "@mui/material"
import { Text } from "./Text"
import { ModalWindow } from "./Modal/Modal"
import React, { useCallback, useState } from "react"
import { Button } from "./Button/Button"
import { useStore, randomHero } from "../store/store"
import Title from "./Title"

export default React.memo(function RandomPaper() {
  const [isOpen, stateOpen] = useState(false)
  const { heroes, randomed } = useStore()

  const dialogClickHandler = useCallback(() => {
    stateOpen(!isOpen)
  }, [isOpen])

  const clickHandler = useCallback(() => {
    randomHero()
  }, [])

  return (
    <Container style={{ marginTop: "2px" }}>
      <Title
        order={1}
        styles={{
          display: "flex",
          justifyContent: "center",
          fontSize: 24,
        }}
      >
        RANDOM YOUR NEXT DOTA 2 HERO!
      </Title>
      <Paper
        elevation={3}
        style={{
          marginTop: "5px",
          padding: "10px",
        }}
      >
        <Title
          order={2}
          styles={{
            display: "flex",
            justifyContent: "center",
            fontSize: 16,
          }}
        >
          Select the buttons that will help you to find the hero you want:
        </Title>
        <Box style={{ display: "flex" }}>
          <Button action={clickHandler}>Random</Button>
          <Button action={dialogClickHandler}>Advanced options</Button>
          <ModalWindow
            className={"advancedDialog"}
            isOpen={isOpen}
            toClose={dialogClickHandler}
            data={heroes}
          />
        </Box>
        {Object.keys(randomed).length ? (
          <Text>Your heroes for this time is: {randomed.localized_name}</Text>
        ) : null}
      </Paper>
    </Container>
  )
})
