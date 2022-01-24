import { Box, Container, Paper } from "@mui/material"
import { Text } from "./Text"
import { ModalWindow } from "./Modal/Modal"
import { useState } from "react"
import { Button } from "./Button/Button"
import { getRandomNumber } from "../utility/getRandomNumber"

export default function RandomPaper({ data, setRandomed, randomed }) {
  const [isOpen, stateOpen] = useState(false)

  const dialogClickHandler = () => {
    stateOpen(!isOpen)
  }

  const clickHandler = () => {
    const id = getRandomNumber(data.length)
    setRandomed({
      name: data[id].localized_name,
      attackType: data[id].attack_type,
      roles: data[id].roles,
      id,
    })
  }

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
          Select the items that you want to find the character you want:
        </Text>
        <Box>
          <Button action={clickHandler}>Random</Button>
          <Button action={dialogClickHandler}>Advanced options</Button>
          <ModalWindow
            isOpen={isOpen}
            toClose={dialogClickHandler}
            data={data}
          />
        </Box>
        {Object.keys(randomed).length ? (
          <Text>Your heroes for this time is: {randomed.name}</Text>
        ) : null}
      </Paper>
    </Container>
  )
}
