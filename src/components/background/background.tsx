import React, { ReactNode } from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

type Props = {
  children: ReactNode
  className: string
}

const BackgroundSection = ({ className, children }: Props) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bg_1.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 5000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default StyledBackgroundSection
