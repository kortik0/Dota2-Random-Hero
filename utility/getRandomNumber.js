export const getRandomNumber = (max, filter, currenRandomed) => {
  const rand = Math.floor(Math.random() * max)

  if (filter[rand].name === currenRandomed?.name) {
    console.log("Need to be rerandomed!")
    return getRandomNumber(max, filter, currenRandomed)
  }

  return rand
}
