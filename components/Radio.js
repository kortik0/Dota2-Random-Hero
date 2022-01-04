import { useState } from "react"

export const Radio = () => {
  const [select, makeSelect] = useState("Carry")

  const roles = [
    "Carry",
    "Disabler",
    "Initiator",
    "Jungler",
    "Support",
    "Durable",
    "Nuker",
    "Pusher",
    "Escape",
  ]

  const setSelected = (value) => {
    console.log(value)
    makeSelect(value)
  }

  return "Nothing"
}
