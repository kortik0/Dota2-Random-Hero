import create from "zustand"
import { devtools } from "zustand/middleware"

import { getRandomNumber } from "../utility/getRandomNumber"

export const useStore = create(
  //WTF WRONG WITH, TS?
  devtools((set, get) => ({
    heroes: [],
    strength: [],
    agility: [],
    intelligence: [],
    randomed: {},
    initializeHero: (data) => {
      set({
        heroes: data,
      })
      get().listOfAttributedHero()
    },
    listOfAttributedHero: () => {
      set({
        strength: get().heroes.filter((hero) => hero.primary_attr === "str"),
        agility: get().heroes.filter((hero) => hero.primary_attr === "agi"),
        intelligence: get().heroes.filter(
          (hero) => hero.primary_attr === "int"
        ),
      })
    },
  }))
)

export const randomHero = (filter) => {
  const get = useStore.getState()

  const heroCollector = filter || get.heroes

  const { rand, caution } = getRandomNumber(heroCollector, get.randomed)

  const roleWriter = () => {
    switch (heroCollector[rand].primary_attr) {
      case "int":
        return "Intelligence"
      case "agi":
        return "Agility"
      case "str":
        return "Strength"
    }
  }

  const randomedHeroID = get.heroes.filter(
    (hero) => hero.localized_name === heroCollector[rand].localized_name
  )[0]?.id

  useStore.setState({
    randomed: {
      localized_name: heroCollector[rand].localized_name,
      name: heroCollector[rand].name,
      attackType: heroCollector[rand].attack_type,
      roles: heroCollector[rand].roles,
      attributes: roleWriter(),
      id: randomedHeroID,
      caution,
    },
  })
}
