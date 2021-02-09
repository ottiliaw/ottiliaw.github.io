import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About Me" />
    <h1>hello there</h1>
    <p>one day i will have interesting things here, such as music and weird blog posts about knitting</p>
    <p>my undergraduate dissertation was published as a part of the 1st UAV IEEE conference in Oman 2019, and can be read <a href='https://ieeexplore.ieee.org/document/8658279'>here</a> </p>
  </Layout>
)

export default SecondPage
