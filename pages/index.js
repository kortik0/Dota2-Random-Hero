// import { Header } from "../components/Header"
// import useSWR from "swr"
// import { Loader } from "../components/Loader"
// const CustomPage500 = dynamic(() => import("./500"))

import dynamic from "next/dynamic"
import { motion } from "framer-motion"

const HeroDispayMemoized = dynamic(() =>
  import("../components/HerosLayer/HeroDisplay")
)

const MemulatedRandomPaper = dynamic(() => import("../components/RandomPaper"))

import { useRef } from "react"
import { Box } from "@mui/material"
import { Copyright } from "../components/Copyright"

import { useStore } from "../store/store"
import { ImageContext } from "../context/ImageContext"

export default function Index({ data, images }) {
  const ref = useRef(null)
  const init = useStore((state) => state.initializeHero)

  init(data)

  return (
    <ImageContext.Provider value={images}>
      <motion.div
        ref={ref}
        style={{
          zIndex: 50,
          background: "#1d3557",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        initial={"hidden"}
        animate={"visible"}
        exit={"deleted"}
        variants={{
          hidden: {
            opacity: 1,
          },
          visible: {
            display: "none",
            opacity: 0,
            transition: {
              duration: 1,
            },
          },
        }}
      />
      <Box>
        <MemulatedRandomPaper />
        <br />
        <HeroDispayMemoized />

        <Copyright />
      </Box>
    </ImageContext.Provider>
  )
}

export async function getStaticProps(context) {
  const response = await fetch("https://api.opendota.com/api/heroes")
  const data = await response.json()
  const images = []

  for (const hero of data) {
    const image = `https://cdn.dota2.com/apps/dota2/images/heroes/${hero.name.slice(
      14
    )}_lg.png`

    images.push({ name: hero.name, image })
  }
  return {
    props: {
      data,
      images,
    }, // will be passed to the page component as props
  }
}
