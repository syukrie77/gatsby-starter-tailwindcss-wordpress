import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
//import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="mx-auto max-w-screen-lg px-4">
        <main>{children}</main>
        <footer className="mt-5 text-sm">
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com" className="text-blue-500 hover:text-blue-700">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
