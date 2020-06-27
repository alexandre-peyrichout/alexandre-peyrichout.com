import styled from "styled-components"
import { Theme } from "../../global-styles/theme"

export const PortraitWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100%;
  background-color: ${Theme.colors.main};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  .gatsby-image-wrapper {
    width: 50%;
    border-radius: 30%;
    border: solid 5px grey;
  }
`
