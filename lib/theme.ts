//theme.ts
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#F6FFF8",
      },
    }),
  },
})

const palette = {
  viridian: "#6B9080",
  cambridge_blue: "#A4C3B2",
  mint_green: "#CCE3DE",
  azure: "#EAF4F4",
  mint_cream: "#F6FFF8",
}

export default theme
export { palette }
