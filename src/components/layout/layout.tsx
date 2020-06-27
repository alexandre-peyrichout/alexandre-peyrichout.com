/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react"

import Header from "../header/header"
import Footer from "../footer/footer"

import { LayoutWrapper } from "./layout.styles"

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      {/* <Header /> */}
      <LayoutWrapper>
        <main>{children}</main>
        {/* <Footer /> */}
      </LayoutWrapper>
    </>
  )
}

export default Layout
