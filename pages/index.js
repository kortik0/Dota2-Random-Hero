// import { Header } from "../components/Header"
import useSWR from "swr"

import { Box } from "@mui/material"
import { useState } from "react"
import { MemulatedRandomPaper } from "../components/RandomPaper"
import HeroDisplay from "../components/HerosLayer/HeroDisplay"
import CustomPage500 from "./500"
import { initializeStoreDataFromApi } from "../store/store"
import { Loader } from "../components/Loader"
import { Copyright } from "../components/Copyright"

export default function Index() {
  //({ data })
  const { isLoading, isError, data } = GetHeroes()
  const [randomed, setHero] = useState([])

  if (isError) {
    return <CustomPage500 />
  }

  if (!data) {
    console.log("Wait for loading!~")
    return <Loader />
  }

  initializeStoreDataFromApi(data)

  return (
    <Box>
      <>
        <MemulatedRandomPaper setRandomed={setHero} randomed={randomed} />
        <br />
        <HeroDisplay data={data} randomed={randomed} />
      </>
      <Copyright />
    </Box>
  )
}

const GetHeroes = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())

  const { data, error } = useSWR("https://api.opendota.com/api/heroes", fetcher)

  return {
    data,
    isError: error,
    isLoading: !error && !data,
  }
}

// export async function getStaticProps() {
//
//   const response = await fetch("https://api.opendota.com/api/heroes")
//   const data = await response.json()
//
//   return {
//     props: {
//       data,
//       fallback: false,
//     },
//   }
// }
