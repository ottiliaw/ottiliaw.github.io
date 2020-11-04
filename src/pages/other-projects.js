import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About Me" />
    <h1>oh hello there</h1>
    <p>one day i will have interesting things here </p>
    <Link to="/">homepage</Link>
  </Layout>
)

export default SecondPage
