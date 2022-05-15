import { Grid } from "@mui/material"
import GridGenerator from "./GridLists/GridGenerator"
import { useStore } from "../../store/store"

export default function HeroDisplay() {
  const randomed = useStore((state) => state.randomed)

  return (
    <Grid container direction={"column"} pl={"5px"}>
      <GridGenerator ability={"Strength"} randomedHero={randomed} />
      <GridGenerator ability={"Agility"} randomedHero={randomed} />
      <GridGenerator ability={"Intelligence"} randomedHero={randomed} />
    </Grid>
  )
}
