import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Other projects" />
    <h1>other projects</h1>
    <p>one day i will have interesting things here, such as music and weird blog posts about knitting</p>
    <h3> publications: </h3>
    <a href='https://ieeexplore.ieee.org/document/8658279'> Drone Hacking with Raspberry-Pi 3 and WiFi Pineapple: Security and Privacy Threats for the Internet-of-Things</a>
    <p> 2019 - my undergraduate dissertation research, published as a part of the 1st UAV IEEE conference in Oman </p>

    <h3> talks: </h3>
    <a>Knitting As A Service - why knitting is coding, and yarn is a programmable material</a>
    <p> 2020 - internal conference </p>
  </Layout>
)

export default SecondPage
