import styled from "styled-components"

export const TerminalWrapper = styled.div`
  width: 100%;
  overflow: auto;
  height: 100%;
  background-color: black;
  color: white;

  .Terminal-prompt {
    color: red;
  }
  .Terminal-body {
    margin-top: 0px;
    padding-top: 45px;
  }
`
