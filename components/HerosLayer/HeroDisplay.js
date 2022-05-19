import { Grid } from "@mui/material"
import GridGenerator from "./GridLists/GridGenerator"
import { useStore } from "../../store/store"
import { useHookWithRefCallback } from "../../customHooks/useHookWithRefCallback"

export default function HeroDisplay() {
  const randomed = useStore((state) => state.randomed)
  const [ref] = useHookWithRefCallback(randomed)

  return (
    <Grid ref={ref} container direction={"column"} pl={"5px"}>
      <GridGenerator ability={"Strength"} />
      <GridGenerator ability={"Agility"} />
      <GridGenerator ability={"Intelligence"} />
    </Grid>
  )
}
