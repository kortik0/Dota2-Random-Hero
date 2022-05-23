import { Box, Container, Paper } from "@mui/material"
import { Text } from "./Text"
import { ModalWindow } from "./Modal/Modal"
import React, { useCallback, useState } from "react"
import { Button } from "./Button/Button"
import { useStore, randomHero } from "../store/store"

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
    <Container style={{ marginTop: "20px" }}>
      <Paper
        elevation={3}
        style={{
          padding: "10px",
        }}
      >
        <Text
          styles={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          Select the buttons that will help you to find the character you want:
        </Text>
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
