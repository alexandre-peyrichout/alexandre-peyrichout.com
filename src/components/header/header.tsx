import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
// styled-components
import { NavbarList } from "./header.styles"
import { NavbarItem } from "./header.styles"

const Header = () => {
  const data = useStaticQuery(graphql`
    query getAllLinks {
      site {
        siteMetadata {
          menuLinks {
            name
            url
          }
        }
      }
    }
  `)
  type MenuLinks = [{ name: string; url: string }]
  const menuLinks: MenuLinks = data.site.siteMetadata.menuLinks

  return (
    <header>
      <nav>
        <NavbarList>
          {menuLinks.map(({ name, url }) => {
            return (
              <NavbarItem key={name}>
                <Link to={url}>{name}</Link>
              </NavbarItem>
            )
          })}
        </NavbarList>
      </nav>
    </header>
  )
}

export default Header
