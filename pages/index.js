// import { Header } from "../components/Header"
import { Box } from "@mui/material"
import Link from "next/link"
import { Text } from "../components/Text"
import { motion } from "framer-motion"
import { useState } from "react"
import RandomPaper from "../components/RandomPaper"
import HeroDisplay from "../components/HeroDisplay"
import GitHubIcon from "@mui/icons-material/GitHub"

export default function Index({ data }) {
  const [randomed, setHero] = useState([])

  // useEffect(() => console.log(randomed))

  return (
    <Box>
      {/*<Header />*/}
      <>
        <RandomPaper data={data} setRandomed={setHero} randomed={randomed} />
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
