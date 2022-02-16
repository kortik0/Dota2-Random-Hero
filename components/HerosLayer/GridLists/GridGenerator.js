import { Box, Grid } from "@mui/material"
import { Text } from "../../Text"
import clsx from "clsx"
import Image from "next/image"
import { getHeroName } from "../../../utility/getNameHero"
import { memo } from "react"

const gridGenerator = ({ heroes, ability, id }) => {
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
              className={clsx("Image", { randomed: id === hero.id })}
            >
              <Image
                key={hero.name}
                alt={hero.name}
                width={"110px"}
                height={"77px"}
                objectFit={"cover"}
                quality={100}
                src={getHeroName(hero.name)}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  )
}

export const MemorizedGrid = memo(gridGenerator)
