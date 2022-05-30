import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { MyImage } from "../Image"
import { Text } from "../Text"

const AnimatedHeroImage = ({ randomed }) => {
  return (
    <AnimatePresence>
      <motion.div
        key={randomed.name}
        initial={"hiddenHero"}
        animate={"animatedHero"}
        exit={"leaveHero"}
        style={{ position: "relative" }}
        variants={{
          hiddenHero: {
            left: "-300px",
            display: "none",
          },
          animatedHero: {
            left: 0,
            display: "initial",
            transition: {
              duration: 0.7,
            },
          },
          leaveHero: {
            left: "-300px",
            transition: {
              duration: 0.1,
            },
          },
        }}
      >
        <MyImage hero={randomed} />
      </motion.div>
      {randomed.caution && (
        <Text>
          With these options, only 1 hero is possible to be randomized! If you
          want a more pool, select or turn off some options.
        </Text>
      )}
    </AnimatePresence>
  )
}

export default AnimatedHeroImage
