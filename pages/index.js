import { Header } from "../components/Header"
import { Box } from "@mui/material"
import RandomPaper from "../components/RandomPaper"
import HeroDisplay from "../components/HeroDisplay"

export default function index({ data }) {
  return (
    <Box>
      {/*<Header />*/}
      <br />
      <>
        <RandomPaper data={data} />
        <HeroDisplay data={data} />
      </>
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
