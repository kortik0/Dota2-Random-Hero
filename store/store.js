import { proxy, useSnapshot } from "valtio"
import { getRandomNumber } from "../utility/getRandomNumber"

const store = proxy({ heroes: [] })

export const initializeStoreDataFromApi = (apiData) => {
  store.heroes = apiData
  console.log(store)
}

export const randomTheHero = () => {
  const id = getRandomNumber(store.heroes.length)
  return {
    localized_name: store.heroes[id].localized_name,
    name: store.heroes[id].name,
    attackType: store.heroes[id].attack_type,
    roles: store.heroes[id].roles,
    id,
  }
}

export const useStore = () => {
  return useSnapshot(store)
}
