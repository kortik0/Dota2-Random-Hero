import { Box, Grid } from "@mui/material"
import { Text } from "../../Text"
import { MyImage } from "../../Image"
import React, { useCallback } from "react"
import { useStore } from "../../../store/store"
import clsx from "clsx"

export default React.memo(function GridGenerator({ ability }) {
  const heroes = useStore(
    useCallback((state) => state[ability.toLowerCase()], [ability])
  )

  return (
    <>
      <Grid container item sm={4} position={"relative"} height={"100%"}>
        <Box position={"absolute"} left={"50%"}>
          <Text styles={{ fontWeight: "bold" }} color={"#f1faee"}>
            {ability.toUpperCase()}
          </Text>
        </Box>
        <Grid container item style={{ marginTop: "25px" }}>
          {heroes.map((hero) => (
            /** TODO: Now I need to come up with how I supposed to things better with not so cost operation
             *  I mean now it's mark three randomed hero. 1 on each GridGenerator (If randomed has hero from this section).
             *  I need somehow to hide this. But how...
             *  Now it took much lesser time to show which hero was randomed. Great.
             *  It's now looks better and works faster. Pretty much!
             *  Oh, dear Lord give me more time in a day to make more feature and made them more optimized...
             */
            <Grid
              style={{ marginLeft: "15px" }}
              heroid={hero.id}
              key={hero.name}
              item
              /*
               * TODO: Come up with how to choose exact person with minimum re-render cost
               * Without this - 4.6ms is average, but with it grow to 50-60-70
               * Seem's like done. Now it took average 15-25ms.
               * */
              className={clsx("Image")}
            >
              <MyImage hero={hero} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  )
})

/*
 * (prevProps, nextProps) => { <--- I don't know that I can do something like that. LMAO. I don't see this in documentation earlier!
 *    if (nextProps.randomedHero?.attributes === nextProps.ability) {
 *      return false //If it false - you need to re-render
 *    } else {
 *      return true
 *    }
 *  }
 * */

//React.memo - for control re-renders
//useMemo - for control difficult function
