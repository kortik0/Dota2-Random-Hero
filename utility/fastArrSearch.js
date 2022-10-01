export const interpolationSearch = (sortedArray, seekElement) => {
  //Meh, seems good. IDK.
  if (seekElement === undefined) {
    return -1
  }

  let leftIndex = 0
  let rightIndex = sortedArray.length - 1

  while (leftIndex <= rightIndex) {
    const rangeDelta =
      Number(sortedArray[rightIndex].attributes[2].value) -
      Number(sortedArray[leftIndex].attributes[2].value)
    const indexDelta = rightIndex - leftIndex
    const valueDelta =
      seekElement - Number(sortedArray[leftIndex].attributes[2].value)

    if (valueDelta < 0) {
      return -1
    }

    if (!rangeDelta) {
      return Number(sortedArray[leftIndex].attributes[2].value) === seekElement
        ? leftIndex
        : -1
    }

    const middleIndex =
      leftIndex + Math.floor((valueDelta * indexDelta) / rangeDelta)

    if (Number(sortedArray[middleIndex].attributes[2].value) === seekElement) {
      return sortedArray[middleIndex]
    }

    if (Number(sortedArray[middleIndex].attributes[2].value) < seekElement) {
      leftIndex = middleIndex + 1
    } else {
      rightIndex = middleIndex - 1
    }
  }

  return -1
}
