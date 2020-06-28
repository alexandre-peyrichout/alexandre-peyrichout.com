import styled from "styled-components"
import { Theme } from "../../global-styles/theme"

export const TerminalWrapper = styled.div`
  width: 100%;
  overflow: auto;
  height: 100%;
  color: white;

  .Terminal-prompt {
    color: ${Theme.colors.main};
  }
  .Terminal-body {
    margin-top: 0px;
    padding-top: 45px;
  }
  .Terminal-window {
    border: inherit;
    border-radius: inherit;
    box-shadow: inherit;
  }
  .Terminal-cursor {
    background-color: ${Theme.colors.main};
  }
`
