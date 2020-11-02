/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"

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
    <div
      style={{
        display: 'flex',
        margin: `0 auto`,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
        <main>
          <div
            style={{
              margin: `0 auto`,
              padding: `2rem`
            }}>

            {children}
            </div>
          </main>
      </div>
        <footer style={{
        marginTop: `2rem`,
        padding: '0.5rem',
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        }}>
        © {new Date().getFullYear()} - Ottilia Westerlund 
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
