import { createGlobalStyle } from "styled-components"

export const Variables = createGlobalStyle`
html,body {
  font-family: ${props => props.theme.fonts.main}
}
`