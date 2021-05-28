import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About Me" />
    <h1>hello there</h1>
    <p>one day i will have interesting things here, such as music and weird blog posts about knitting</p>
    <h3> Publications </h3>
    <a href='https://ieeexplore.ieee.org/document/8658279'> Drone Hacking with Raspberry-Pi 3 and WiFi Pineapple: Security and Privacy Threats for the Internet-of-Things</a>
    <p>my undergraduate dissertation research was published as a part of the 1st UAV IEEE conference in Oman 2019</p>
  </Layout>
)

export default SecondPage
