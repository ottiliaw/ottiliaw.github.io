import React from "react"
import { Link } from "gatsby"
import Image from '../components/image'
import SEO from "../components/seo"
import './index.css'

const IndexPage = () => (
  <>
    <main>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <SEO title="Home" />
        <div style={{
              margin: `0 auto`,
              padding: `8rem`
            }}>
            <h1 className={'ottilia'}>ottilia westerlund</h1>
            <Image style={{
              marginLeft: '8rem'
            }}/>
            <p>maker of things // doer of stuff</p>
            <Link className={'link'} to="/about-me/">about me</Link> 
            <Link className={'link'} to="/photography/">photography</Link>
            <Link className={'link'} to="/other-projects/">other projects</Link>
        </div>

      </div>
    </main>
</>
)

export default IndexPage
