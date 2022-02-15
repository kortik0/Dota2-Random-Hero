// import { Header } from "../components/Header"
import useSWR from "swr"

import { Box } from "@mui/material"
import Link from "next/link"
import { Text } from "../components/Text"
import { motion } from "framer-motion"
import { useState } from "react"
import { MemulatedRandomPaper } from "../components/RandomPaper"
import HeroDisplay from "../components/HerosLayer/HeroDisplay"
import GitHubIcon from "@mui/icons-material/GitHub"

export default function Index() {
  //({ data })
  const { isLoading, isError, data } = GetHeroes()
  const [randomed, setHero] = useState([])

  if (isError) {
    console.error("Someting went wrong not in our side!")
  }

  return !isLoading && data ? (
    <Box>
      <>
        <MemulatedRandomPaper
          data={data}
          setRandomed={setHero}
          randomed={randomed}
        />
        <br />
        <HeroDisplay data={data} randomed={randomed} />
      </>
      <motion.div
        initial={"hidden"}
        animate={"visible"}
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Text>
          Developed by kortiko just to make every games in Dota funnest. Please
          check the social media if interested:{" "}
          <Link href={"https://github.com/kortik0"}>
            <a>
              <GitHubIcon style={{ cursor: "pointer" }} />
            </a>
          </Link>
        </Text>
      </motion.div>
    </Box>
  ) : null
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
//   const fetcher = (...args) => fetch(...args).then((res) => res.json())
//
//   const { data, error } = useSWR("https://api.opendota.com/api/heroes", fetcher)
//
//   // const response = await fetch("https://api.opendota.com/api/heroes")
//   // const data = await response.json()
//
//   return {
//     props: {
//       data,
//       fallback: false,
//     },
//   }
// }
