import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {

  // Extend theme
  const themeExt = extendTheme({
    colors: {
      "home.dark": "#322A26",
      "home.light": "#677DB7",
      "nav.dark": "#191308",
      "nav.light": "#454B66",
    }
  })

  return (
    <ChakraProvider theme={themeExt}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
