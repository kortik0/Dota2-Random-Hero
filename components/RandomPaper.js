import { Button, Container, Paper } from "@mui/material"
import { Text } from "./Text"
import { getRandomNumber } from "../utility/getRandomNumber"
import { useState } from "react"

export default function RandomPaper({ data }) {
  const [randomed, setRandomed] = useState("")

  const clickHandler = () => {
    const id = getRandomNumber(data.length)
    setRandomed(data[id].localized_name)
    console.log("Your hero is " + data[id].localized_name + " with id: " + id)
  }

  return (
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
      <Button
        onClick={clickHandler}
        variant={"outlined"}
        color={"btnColor"}
        disableElevation
      >
        Random
      </Button>
      {randomed.length ? (
        <Text>Your heroes for this time is: {randomed}</Text>
      ) : null}
    </Paper>
  )
}
