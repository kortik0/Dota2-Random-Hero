import { Button, Paper } from "@mui/material"
import { Text } from "./Text"
import { getRandomNumber } from "../utility/getRandomNumber"

export default function RandomPaper({ data, setRandomed, randomed }) {
  const clickHandler = () => {
    const id = getRandomNumber(data.length)
    setRandomed(data[id].localized_name)
    console.log(randomed)
    // setRandomed({
    //   name: data[id].localized_name,
    //   attackType: data[id].attack_type,
    //   roles: data[id].roles,
    //   id,
    // })
    // console.log(
    //   `Hi. This is Random Paper. Your hero data is ${randomed.name}, with type ${randomed.attackType} and with many roles ${randomed.roles}`
    // )
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
      {Object.keys(randomed).length ? (
        <Text>Your heroes for this time is: {randomed}</Text>
      ) : null}
    </Paper>
  )
}
