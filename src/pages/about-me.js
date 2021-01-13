import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About Me" />
    <h1>oh hello there</h1>
    <p>there will be some fun stuff about me here (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ </p>
    <Link to="/">homepage</Link>
  </Layout>
)

export default SecondPage
