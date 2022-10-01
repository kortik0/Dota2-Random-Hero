import React, { useCallback, useRef } from "react"
import { interpolationSearch } from "../utility/fastArrSearch"

export function useHookWithRefCallback(hero) {
  const ref = useRef(null)
  const setRef = useCallback(
    (node) => {
      if (ref.current) {
        ref.current?.classList?.remove("randomed")
      }

      console.log(ref, hero)

      //I hate this. I will rewrite this. Promise.
      if (node) {
        node = node.children
        if (hero.attributes === "Strength") {
          node = node[0]
        } else if (hero.attributes === "Agility") {
          node = node[1]
        } else {
          node = node[2]
        }

        ref.current = interpolationSearch(node.children[1].children, hero.id)
        ref.current?.classList?.add("randomed")
      }
      // Save a reference to the node
    },
    [hero]
  )

  return [setRef]
}
