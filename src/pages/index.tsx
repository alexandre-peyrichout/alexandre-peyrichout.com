import React from "react"
import { graphql, PageProps } from "gatsby"

import { Grid, Cell } from "styled-css-grid"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Terminal from "../components/terminal/terminal"
import Portrait from "../components/portrait/portrait"
import Frontend from "../components/frontend-flip/frontend"

import { Theme } from "../global-styles/theme"

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
    <Grid
      gap="0"
      columns={"5% 1fr 1fr 1fr"}
      rows={"50vh 50vh"}
      areas={[
        "Navbar Portrait Terminal Terminal",
        "Navbar Frontend Backend DevOps",
      ]}
    >
      <Cell area="Navbar" center middle>
        <div>Menu</div>
      </Cell>
      <Cell area="Portrait" center middle>
        <Portrait />
      </Cell>
      <Cell area="Terminal">
        <Terminal />
      </Cell>
      <Cell area="Frontend" center middle>
        <Frontend
          bgColorFront={Theme.colors.frontend}
          bgColorBack="black"
          title="Frontend"
        />
      </Cell>
      <Cell area="Backend" center middle>
        <Frontend
          bgColorFront={Theme.colors.backend}
          bgColorBack="black"
          title="Backend"
        />
      </Cell>
      <Cell area="DevOps" center middle>
        <Frontend
          bgColorFront={Theme.colors.devops}
          bgColorBack="black"
          title="DevOps"
        />
      </Cell>
    </Grid>
    {/* 
    <h1>{data.site.siteMetadata.author}</h1>
    <h2>{data.site.siteMetadata.title}</h2> */}
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
