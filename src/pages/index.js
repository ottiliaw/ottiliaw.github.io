import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (

  <>
  <div
    style={{
      display: 'flex',
      margin: `0 auto`,
      padding: `0 1.0875rem 1.45rem`,
    }}
  >
    <main>
      <SEO title="Home" />
      <div
          style={{
            margin: `0 auto`,
            padding: `2rem`
          }}>

        <h1>Ottilia Westerlund</h1>
        <p>here's something interesting about me, and the stuff I do</p>
        <Link to="/page-2/">about me</Link>
      </div>

    
      <div style={{ marginBottom: `1.45rem` }}>
        
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

export default IndexPage
