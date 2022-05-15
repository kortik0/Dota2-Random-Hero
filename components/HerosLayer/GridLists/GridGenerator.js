import { Box, Grid } from "@mui/material"
import { Text } from "../../Text"
import { MyImage } from "../../Image"
import React, { useCallback } from "react"
import { useStore } from "../../../store/store"
import clsx from "clsx"

export default React.memo(
  function GridGenerator({ ability, randomedHero }) {
    const heroes = useStore(
      useCallback((state) => state[ability.toLowerCase()], [ability])
    )

    // const randomed = useStore((state) =>
    //   state.randomed.attributes === ability ? state.randomed : null
    // )

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
                /*
                 * TODO: Come up with how to choose exact person with minimum re-render cost
                 * Without this - 4.6ms is average, but with it grow to 50-60-70
                 * Seem's like done. Now it took average 20-25ms.
                 * */
                className={clsx("Image", {
                  randomed: randomedHero?.id === hero.id,
                })}
              >
                <MyImage hero={hero} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </>
    )
  },
  (prevProps, nextProps) => {
    if (nextProps.randomedHero?.attributes === nextProps.ability) {
      return false //If it false - you need to re-render
    } else {
      return true
    }
  }
)
