import { Grid } from "@mui/material"
import { MemorizedGrid } from "./GridLists/GridGenerator"

export default function HeroDisplay() {
  return (
    <Grid container direction={"row"} pl={"5px"}>
      <MemorizedGrid ability={"Strength"} />
      <MemorizedGrid ability={"Agility"} />
      <MemorizedGrid ability={"Intelligence"} />
    </Grid>
  )
}
