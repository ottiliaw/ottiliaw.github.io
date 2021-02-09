import React from "react"
import Image from '../components/image'
import SEO from "../components/seo"
import Blob from "../components/blob"
import Header from "../components/header.js"

import './index.css'

const IndexPage = () => (
  <>
    <main>
      <Header  />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <SEO title="Home" />
        <div style={{
              margin: `0 auto`,
              padding: `4rem`
            }}>
            <h1 className={'ottilia'}>ottilia westerlund</h1>
            
            <Image style={{
              marginLeft: '8rem'
            }}/>
            <Blob />
            <p>maker of things // doer of stuff</p>

        </div>

      </div>
    </main>
</>
)

export default IndexPage
