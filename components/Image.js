import Image from "next/image"
import { getHeroName } from "../utility/getNameHero"

export const MyImage = ({ hero }) => {
  return (
    <Image
      key={hero.name}
      alt={"No response from Dota 2 API for " + hero.localized_name}
      src={getHeroName(hero.name)}
      objectFit={"cover"}
      width={110}
      height={71}
      quality={70}
      loading={"lazy"}
    />
  )
}
