import { Grid } from "@mui/material"
import { motion } from "framer-motion"
import { MemorizedGrid } from "./GridLists/GridGenerator"

export default function HeroDisplay({ data, randomed }) {
  const strength = data.filter((hero) => hero.primary_attr === "str")
  const agility = data.filter((hero) => hero.primary_attr === "agi")
  const intelligence = data.filter((hero) => hero.primary_attr === "int")

  const randomedHeroID = data.filter(
    (hero) => hero.localized_name === randomed.localized_name
  )[0]?.id

  return (
    <motion.div
      initial={"hidden"}
      animate={"visible"}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 1,
          },
        },
      }}
    >
      <Grid container direction={"row"} mt={"5px"} pl={"5px"}>
        <MemorizedGrid
          heroes={strength}
          ability={"Strength"}
          id={randomedHeroID}
        />
        <MemorizedGrid
          heroes={agility}
          ability={"Agility"}
          id={randomedHeroID}
        />
        <MemorizedGrid
          heroes={intelligence}
          ability={"Intelligence"}
          id={randomedHeroID}
        />
        {/*{gridGenerator(strength, "Strength", randomedHeroID)}*/}
        {/*{gridGenerator(agility, "Agility", randomedHeroID)}*/}
        {/*{gridGenerator(intelligence, "Intelligence", randomedHeroID)}*/}
      </Grid>
    </motion.div>
  )
}
