import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Header from "./header.js"

const Layout = ({ children }) => {

  return (
    <>
    <Header />
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
