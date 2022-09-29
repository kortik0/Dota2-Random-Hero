import Image from "next/image"
import { useContext } from "react"
import { ImageContext } from "../context/ImageContext"

export const MyImage = ({ hero }) => {
  const images = useContext(ImageContext)

  return (
    <Image
      key={hero.name}
      alt={"No response from Dota 2 API for " + hero.localized_name}
      src={images.find((image) => image.name === hero.name).image}
      objectFit={"cover"}
      width={110}
      height={70}
      quality={70}
      loading={"lazy"}
    />
  )
}
