// import { Header } from "../components/Header"
import { Box, Divider } from "@mui/material"
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
  const response = await fetch("http://localhost:3000/api/")
  const data = await response.json()

  return {
    props: {
      data,
      fallback: false,
    },
  }
}
