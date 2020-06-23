import React from "react"
import { ThemeProvider } from "styled-components"

import { Theme } from "./theme"
import { Reset } from "./reset"
import{Variables} from "./variables"

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Reset />
      <Variables />
      {element}
    </ThemeProvider>
  )
}
