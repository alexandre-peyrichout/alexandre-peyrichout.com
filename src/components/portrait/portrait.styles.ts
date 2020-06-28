import styled from "styled-components"
import { Theme } from "../../global-styles/theme"

export const PortraitWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100%;
  background-color: ${Theme.colors.portrait};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
