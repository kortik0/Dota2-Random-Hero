// import { Header } from "../components/Header"
import useSWR from "swr"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"

const HeroDispayMemoized = dynamic(() =>
  import("../components/HerosLayer/HeroDisplay")
)

const MemulatedRandomPaper = dynamic(() => import("../components/RandomPaper"))

const CustomPage500 = dynamic(() => import("./500"))

import { useRef } from "react" //Read about Suspense
import { Box } from "@mui/material"
import { Loader } from "../components/Loader"
import { Copyright } from "../components/Copyright"
import { useStore } from "../store/store"

export default function Index() {
  const ref = useRef(null)
  const { isLoading, isError, data } = GetHeroes()
  const init = useStore((state) => state.initializeHero)

  if (isError) {
    return <CustomPage500 />
  }

  if (!data) {
    return <Loader />
  }

  init(data)

  //Delete div from view to give access to the buttons
  setTimeout(() => (ref.current.style.display = "none"), 1000)

  return (
    <>
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
    </>
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
