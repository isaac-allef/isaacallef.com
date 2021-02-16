import * as React from "react"

import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import customTheme from "../theme/custom-theme"

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={ customTheme }>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App;