import { Box, Container, Paper } from "@mui/material"
import { motion } from "framer-motion"

import { Text } from "./Text"
import { ModalWindow } from "./Modal/Modal"
import { memo, useCallback, useState } from "react"
import { Button } from "./Button/Button"
import { getRandomNumber } from "../utility/getRandomNumber"

const RandomPaper = ({ data, setRandomed, randomed }) => {
  const [isOpen, stateOpen] = useState(false)

  const dialogClickHandler = useCallback(() => {
    stateOpen(!isOpen)
  }, [isOpen])

  const clickHandler = useCallback(() => {
    const id = getRandomNumber(data.length)
    setRandomed({
      localized_name: data[id].localized_name,
      name: data[id].name,
      attackType: data[id].attack_type,
      roles: data[id].roles,
      id,
    })
  }, [data, setRandomed])

  return (
    <motion.div
      initial={"hidden"}
      animate={"visible"}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 1,
          },
        },
      }}
    >
      <Container style={{ marginTop: "20px" }}>
        <Paper
          elevation={3}
          style={{
            padding: "10px",
          }}
        >
          <Text
            styles={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Select the buttons that will help you to find the character you
            want:
          </Text>
          <Box style={{ display: "flex" }}>
            <Button action={clickHandler}>Random</Button>
            <Button action={dialogClickHandler}>Advanced options</Button>
            <ModalWindow
              className={"advancedDialog"}
              isOpen={isOpen}
              toClose={dialogClickHandler}
              setRandom={setRandomed}
              randomed={randomed}
              data={data}
            />
          </Box>
          {Object.keys(randomed).length ? (
            <Text>Your heroes for this time is: {randomed.localized_name}</Text>
          ) : null}
        </Paper>
      </Container>
    </motion.div>
  )
}

export const MemulatedRandomPaper = memo(RandomPaper)
