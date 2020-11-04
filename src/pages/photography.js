import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About Me" />
    <h1>oh hello there</h1>
    <p>there's meant to be photos here. look at <a href='https://www.instagram.com/tillywester'> this </a> meanwhile </p>
    <Link to="/">homepage</Link>
  </Layout>
)

export default SecondPage
