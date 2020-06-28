import React, { ReactNode } from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

type Props = {
  children: ReactNode
  className?: string
}

const BackgroundSection = ({ className, children }: Props) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "tenor.gif" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 5000) {
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
  width: 100%;
  height: 100%;
  background-position: top left;
  background-repeat: repeat;
`

export default StyledBackgroundSection
