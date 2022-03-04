import { Box, Grid } from "@mui/material"
import { Text } from "../../Text"
import clsx from "clsx"
import { MyImage } from "../../Image"
import { memo, useCallback } from "react"
import { useStore } from "../../../store/store"

const GridGenerator = ({ ability }) => {
  const heroes = useStore(
    useCallback((state) => state[ability.toLowerCase()], [ability])
  )

  const randomed = useStore((state) => state.randomed)

  return (
    <>
      <Grid container item sm={4} position={"relative"} height={"100%"}>
        <Box position={"absolute"} left={"30%"}>
          <Text styles={{ fontWeight: "bold" }} color={"#f1faee"}>
            {ability.toUpperCase()}
          </Text>
        </Box>
        <Grid container item style={{ marginTop: "25px" }}>
          {heroes.map((hero) => (
            <Grid
              style={{ marginLeft: "15px" }}
              key={hero.name}
              item
              className={clsx("Image", {
                randomed: randomed.id === hero.id,
              })}
            >
              <MyImage hero={hero} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  )
}

export const MemorizedGrid = memo(GridGenerator)
