// import { Header } from "../components/Header"
import { Box } from "@mui/material"
import RandomPaper from "../components/RandomPaper"
import HeroDisplay from "../components/HeroDisplay"
import { useState } from "react"

export default function Index({ data }) {
  const [randomed, setHero] = useState([])

  return (
    <Box>
      {/*<Header />*/}
      <>
        <RandomPaper data={data} setRandomed={setHero} randomed={randomed} />
        <br />
        <HeroDisplay data={data} randomed={randomed} />
      </>
    </Box>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://api.opendota.com/api/heroes")
  const data = await response.json()

  return {
    props: {
      data,
      fallback: false,
    },
  }
}
