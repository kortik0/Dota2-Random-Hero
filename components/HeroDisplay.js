import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Paper,
} from "@mui/material"
import { Text } from "./Text"

const gridGenerator = (ability) => {
  return (
    <Grid container item spacing={2} sm={4}>
      {ability.map((hero) => (
        <Grid item direction={"column"}>
          <img
            key={hero.name}
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
            }}
            src={getHeroName(hero.name)}
          />
        </Grid>
      ))}
    </Grid>
  )
}

const getHeroName = (initialName) => {
  return `http://cdn.dota2.com/apps/dota2/images/heroes/${initialName.slice(
    14
  )}_lg.png`
}

export default function HeroDisplay({ data }) {
  const strength = data.filter((hero) => hero.primary_attr === "str")
  const agility = data.filter((hero) => hero.primary_attr === "agi")
  const intelligence = data.filter((hero) => hero.primary_attr === "int")

  return (
    <Grid container direction={"row"} mt={"5px"} pl={"5px"}>
      {gridGenerator(strength)}
      {gridGenerator(agility)}
      {gridGenerator(intelligence)}
    </Grid>
  )
}

// const depr = {
//
// {gridGenerator(strength)}
// {gridGenerator(agility)}
// {gridGenerator(intelligence)}
// {/*<Grid container item spacing={2} sm={4} className={"strength"}>*/}
// {/*  {strength.map((hero) => (*/}
// {/*    <Grid item direction={"column"}>*/}
// {/*      <img*/}
// {/*        key={hero.name}*/}
// {/*        style={{*/}
// {/*          width: "70px",*/}
// {/*          height: "70px",*/}
// {/*          objectFit: "cover",*/}
// {/*        }}*/}
// {/*        src={getHeroName(hero.name)}*/}
// {/*      />*/}
// {/*    </Grid>*/}
// {/*  ))}*/}
// {/*</Grid>*/}
// {/*<Grid container item spacing={2} sm={4} className={"agility"}>*/}
// {/*  {agility.map((hero) => (*/}
// {/*    <Grid item direction={"column"}>*/}
// {/*      <img*/}
// {/*        key={hero.name}*/}
// {/*        style={{*/}
// {/*          width: "90px",*/}
// {/*          height: "90px",*/}
// {/*          objectFit: "cover",*/}
// {/*        }}*/}
// {/*        src={getHeroName(hero.name)}*/}
// {/*      />*/}
// {/*    </Grid>*/}
// {/*  ))}*/}
// {/*</Grid>*/}
// {/*<Grid container item spacing={2} sm={4} className={"intelligence"}>*/}
// {/*  {intelligence.map((hero) => (*/}
// {/*    <Grid item direction={"column"}>*/}
// {/*      <img*/}
// {/*        key={hero.name}*/}
// {/*        style={{*/}
// {/*          width: "90px",*/}
// {/*          height: "90px",*/}
// {/*          objectFit: "cover",*/}
// {/*        }}*/}
// {/*        src={getHeroName(hero.name)}*/}
// {/*      />*/}
// {/*    </Grid>*/}
// {/*  ))}*/}
// {/*</Grid>*/}
//
// }
