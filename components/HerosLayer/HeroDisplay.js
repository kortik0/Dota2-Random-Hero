import { Grid } from "@mui/material"
import { motion } from "framer-motion"
import { MemorizedGrid } from "./GridLists/GridGenerator"
import { useStore } from "../../store/store"

export default function HeroDisplay() {
  const data = useStore((state) => state.heroes)
  const randomed = useStore((state) => state.randomed)

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
      <Grid container direction={"row"} pl={"5px"}>
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
      </Grid>
    </motion.div>
  )
}
