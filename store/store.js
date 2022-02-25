import create from "zustand"
import { devtools } from "zustand/middleware"

import { getRandomNumber } from "../utility/getRandomNumber"

export const useStore = create(
  //WTF WRONG WITH, TS?
  devtools((set) => ({
    heroes: [],
    randomed: {},
    initializeHero: (data) => {
      set({
        heroes: data,
      })
    },
  }))
)

export const randomHero = (filter) => {
  const get = useStore.getState()

  const heroCollector = filter || get.heroes

  const { rand, caution } = getRandomNumber(heroCollector, get.randomed)

  useStore.setState({
    randomed: {
      localized_name: heroCollector[rand].localized_name,
      name: heroCollector[rand].name,
      attackType: heroCollector[rand].attack_type,
      roles: heroCollector[rand].roles,
      id: rand,
      caution,
    },
  })
}
