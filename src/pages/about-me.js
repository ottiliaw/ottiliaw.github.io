import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About Me" />
    <h1>hello there (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ </h1>
    <p>I'm Ottilia. I currently work as a web developer, and spend most of my time thinking about cyber security, art and music. </p>
    <p>Someday I will get around to finish this webpage!</p>

    <h4>Education</h4>
    <h5>First Class B.Eng (Hons) in Computer Security and Forensics</h5>
    <p>2014-2018 - Edinburgh Napier University <br></br>
      My dissertation was published as a part of the 1st UAV IEEE conference in Oman 2019, and can be read <a href='https://ieeexplore.ieee.org/document/8658279'>here</a> 
    </p>  <br></br>

    <Link to="/">homepage</Link>
  </Layout>
)

export default SecondPage
