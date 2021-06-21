import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"

const BlogPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) 
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
        <h1>blog posts</h1>
      <div className="grids">
        {Posts}
      </div>
    </Layout>
  )
}

export default BlogPage
export const pageQuery = graphql`
  query blogPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`