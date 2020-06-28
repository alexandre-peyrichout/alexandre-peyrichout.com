import styled from "styled-components"

type Props = {
  bg_color: string
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props: Props) =>
    props.bg_color ? props.bg_color : null};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "matrix";
`
