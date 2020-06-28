import React, { useState } from "react"
import { Wrapper } from "./frontend.styles"
import ReactCardFlip from "react-card-flip"

type Props = {
  bgColorFront: string
  bgColorBack: string
  title: string
}

const Frontend = ({ bgColorFront, bgColorBack, title }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <Wrapper
      bg_color="transparent"
      onMouseOver={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="vertical"
        containerStyle={{ height: "100%", width: "100%" }}
      >
        <Wrapper key="front" bg_color={bgColorFront}>
          {title}
        </Wrapper>
        <Wrapper key="back" bg_color={bgColorBack}>
          backkkk
        </Wrapper>
      </ReactCardFlip>
    </Wrapper>
  )
}

export default Frontend
