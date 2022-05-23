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
            <Grid
              style={{ marginLeft: "15px" }}
              heroid={hero.id}
              key={hero.name}
              item
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
