import { Button as MuiButton } from "@mui/material"
import { motion } from "framer-motion"

export const Button = ({ action, styles, children }) => {
  // const [isHovered, changeHoverState] = useState(false)
  //
  const onClickHandler = (event) => {
    const element = event.target
    element.classList.add("clickedElement")
    action()
    setTimeout(() => element.classList.remove("clickedElement"), 500)
  }

  return (
    <motion.div
      className={"btn__element"}
      whileHover={{
        position: "relative",
        scale: [1, 1.2, 0.95],
        transition: {
          duration: 0.4,
        },
      }}
    >
      <MuiButton
        onClick={onClickHandler}
        variant={"outlined"}
        color={"btnColor"}
        style={{ marginRight: "20px", ...styles }}
        className={"btn__element"}
        disableElevation
      >
        {children}
      </MuiButton>
    </motion.div>
  )
}
