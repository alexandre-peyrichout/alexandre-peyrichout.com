import React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import StyledFullBackground from "../components/background/background"

type DataProps = {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
    }
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => (
  <StyledFullBackground className={""} >
  <Layout>
      <SEO title="Accueil" />
      <h1>{data.site.siteMetadata.author}</h1>
      <h2>{data.site.siteMetadata.title}</h2>
    </Layout>
    </StyledFullBackground>
)

export default IndexPage

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
