import { Box, Grid } from "@mui/material"
import { Text } from "./Text"
import clsx from "clsx"

import Image from "next/image"

const gridGenerator = (heroes, ability, id) => {
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
                unoptimized={true} //need advice
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  )
}

const getHeroName = (initialName) => {
  return `http://cdn.dota2.com/apps/dota2/images/heroes/${initialName.slice(
    14
  )}_lg.png`
}

export default function HeroDisplay({ data, randomed }) {
  const strength = data.filter((hero) => hero.primary_attr === "str")
  const agility = data.filter((hero) => hero.primary_attr === "agi")
  const intelligence = data.filter((hero) => hero.primary_attr === "int")

  // console.log(
  //   `Hi. This is Hero Block. Your hero data is ${randomed.name}, with type ${randomed.attackType} and with many roles ${randomed.roles}. ID: ${randomed.id}`
  // )

  const randomedHeroID = data.filter(
    (hero) => hero.localized_name === randomed.name
  )[0]?.id

  // console.log(randomedHeroID)

  return (
    <Grid container direction={"row"} mt={"5px"} pl={"5px"}>
      {gridGenerator(strength, "Strength", randomedHeroID)}
      {gridGenerator(agility, "Agility", randomedHeroID)}
      {gridGenerator(intelligence, "Intelligence", randomedHeroID)}
    </Grid>
  )
}
