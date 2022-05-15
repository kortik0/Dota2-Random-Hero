import { Box, Grid } from "@mui/material"
import { Text } from "../../Text"
import { MyImage } from "../../Image"
import { memo, useCallback } from "react"
import { useStore } from "../../../store/store"

const GridGenerator = ({ ability }) => {
  const heroes = useStore(
    useCallback((state) => state[ability.toLowerCase()], [ability])
  )

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
              className={"Image"}
              style={{ marginLeft: "15px" }}
              key={hero.name}
              item
              /*
               * Come up with how to choose exact person with minimum re-render cost
               * Without this - 4.6ms is average, but with it grow to 50-60-70
               * */
              // className={clsx("Image", {
              //   randomed: randomed.id === hero.id,
              // })}
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
