import { Box, Grid } from "@mui/material"
import { Text } from "./Text"

const gridGenerator = (heroes, ability) => {
  return (
    <>
      <Grid
        style={{ borderRight: "2px solid #457b9d" }} //Maybe should be reworked
        container
        item
        sm={4}
        position={"relative"}
        height={"100%"}
      >
        <Box position={"absolute"} left={"30%"}>
          <Text styles={{ fontWeight: "bold" }} color={"#f1faee"}>
            {ability.toUpperCase()}
          </Text>
        </Box>
        <Grid container item style={{ marginTop: "25px" }}>
          {heroes.map((hero) => (
            <Grid key={hero.name} item className={"Image"}>
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
    `Hi. This is Hero Block. Your hero data is ${randomed.name}, with type ${randomed.attackType} and with many roles ${randomed.roles}`
  )

  const randomedHero = data.filter((_, index) => randomed.id === index)

  return (
    <Grid container direction={"row"} mt={"5px"} pl={"5px"}>
      {gridGenerator(strength, "Strength")}
      {gridGenerator(agility, "Agility")}
      {gridGenerator(intelligence, "Intelligence")}
    </Grid>
  )
}
