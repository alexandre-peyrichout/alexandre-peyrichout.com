import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "test2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      imgStyle={{
        objectFit: "cover",
        objectPosition: "center left",
      }}
      style={{
        width: `100%`,
        height: `100%`,
        top: 0,
        left: 0,
      }}
    />
  )
}

export default Image
