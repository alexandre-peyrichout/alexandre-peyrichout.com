import { createGlobalStyle } from "styled-components"

export const Reset = createGlobalStyle`
* {
    box-sizing:border-box;
    margin: 0;
    padding: 0;
}
html,body {
  font-family: ${props => props.theme.fonts.main}
}
`