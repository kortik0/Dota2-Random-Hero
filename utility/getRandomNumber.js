export const getRandomNumber = (filter, currentRandomed) => {
  const max = filter.length
  const rand = Math.floor(Math.random() * max)

  if (filter.length === 1) {
    return {
      rand,
      caution: true,
    }
  }

  if (filter[rand].name === currentRandomed?.name) {
    return getRandomNumber(filter, currentRandomed)
  }

  return { rand, caution: false }
}
