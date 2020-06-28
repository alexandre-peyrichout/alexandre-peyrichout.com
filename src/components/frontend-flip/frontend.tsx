import React from "react"
import { Wrapper } from "./frontend.styles"

type Props = {
  bg_color: string
  title: string
}

const Frontend = ({ bg_color, title }: Props) => {
  return <Wrapper bg_color={bg_color}>{title}</Wrapper>
}

export default Frontend
