import { act, renderHook } from "@testing-library/react-hooks"
import { cleanup } from "@testing-library/react"
import { useStore, randomHero } from "../store/store"

describe("useStore hook testing", () => {
  afterEach(() => {
    jest.resetAllMocks()
    cleanup()
  })
  const { result } = renderHook(() => useStore((state) => state))

  it("Must have initialize prepared data to initial values", () => {
    const preparedDataToInitialize = [
      {
        id: 1,
        name: "npc_dota_hero_antimage",
        localized_name: "Anti-Mage",
        primary_attr: "agi",
        attack_type: "Melee",
        roles: ["Carry", "Escape", "Nuker"],
        legs: 2,
      },
      {
        id: 53,
        name: "npc_dota_hero_furion",
        localized_name: "Nature's Prophet",
        primary_attr: "int",
        attack_type: "Ranged",
        roles: ["Carry", "Jungler", "Pusher", "Escape", "Nuker"],
        legs: 2,
      },
      {
        id: 137,
        name: "npc_dota_hero_primal_beast",
        localized_name: "Primal Beast",
        primary_attr: "str",
        attack_type: "Melee",
        roles: ["Initiator", "Durable", "Disabler"],
        legs: 2,
      },
    ]

    act(() => {
      result.current.initializeHero(preparedDataToInitialize)
    })

    expect(result.current.heroes).toHaveLength(3)
    expect(result.current.heroes).toEqual(preparedDataToInitialize)
  })

  it("Should sort all hero by their main attribute.", () => {
    act(() => {
      result.current.listOfAttributedHero()
    })

    expect(result.current.strength).toHaveLength(1)
    expect(result.current.agility).toHaveLength(1)
    expect(result.current.intelligence).toHaveLength(1)
    expect(result.current.strength[0].name).toEqual(
      "npc_dota_hero_primal_beast"
    )
    expect(result.current.agility[0].name).toEqual("npc_dota_hero_antimage")
    expect(result.current.intelligence[0].name).toEqual("npc_dota_hero_furion")
  })

  it("Should randome a hero", () => {
    act(() => {
      randomHero(result.current.heroes)
    })

    expect(result.current.randomed).toBeTruthy()
  })
})
