import { Text } from "./Text"
import Link from "next/link"
import GitHubIcon from "@mui/icons-material/GitHub"
import { Box } from "@mui/material"

export const Copyright = () => {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <Text>
        Developed by kortiko just to make every games in Dota funnest. Please
        check the social media if interested:{" "}
        <Link href={"https://github.com/kortik0"}>
          <a>
            <GitHubIcon style={{ cursor: "pointer" }} />
          </a>
        </Link>
      </Text>
    </Box>
  )
}
