import React from "react"
import { Link, graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

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
  <Layout>
    <SEO title="Accueil" />
    <h1>{data.site.siteMetadata.author}</h1>
    <h2>{data.site.siteMetadata.title}</h2>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
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
