import { Box, Grid } from "@mui/material"
import { Text } from "./Text"
import clsx from "clsx"

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
              key={hero.name}
              item
              className={clsx("Image", { randomed: id === hero.id })}
            >
              <img
                key={hero.name}
                alt={hero.name}
                style={{
                  width: "110px",
                  height: "85px",
                  marginLeft: "15px",
                  objectFit: "cover",
                }}
                src={getHeroName(hero.name)}
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

  console.log(
    `Hi. This is Hero Block. Your hero data is ${randomed.name}, with type ${randomed.attackType} and with many roles ${randomed.roles}. ID: ${randomed.id}`
  )

  const randomedHeroID = data.filter((_, index) => index === randomed.id)[0]?.id

  console.log(randomedHeroID)

  return (
    <Grid container direction={"row"} mt={"5px"} pl={"5px"}>
      {gridGenerator(strength, "Strength", randomedHeroID)}
      {gridGenerator(agility, "Agility", randomedHeroID)}
      {gridGenerator(intelligence, "Intelligence", randomedHeroID)}
    </Grid>
  )
}
