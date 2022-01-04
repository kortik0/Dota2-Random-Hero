import { Text } from "../components/Text"
import { getRandomNumber } from "../utility/getRandomNumber"
import { Radio } from "../components/Radio"
import { Header } from "../components/Header"
import { Box, Button, Container, ImageList, Paper } from "@mui/material"

export default function index({ data }) {
  const clickHandler = () => {
    const id = getRandomNumber(data.length)
    console.log("Your hero is " + data[id].localized_name)
  }

  return (
    <Box>
      <Header />
      <Container>
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
        </Paper>
      </Container>
    </Box>
  )
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/")
  const data = await response.json()
  return {
    props: {
      data,
    },
  }
}
