import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <h1>New Articles</h1>
    <hr />
    {data.allStrapiArticle.edges.map(doc => {
      return (
        <div key={doc.node.id}>
          <h1>{doc.node.Title} </h1>
          <Img fluid={doc.node.image.childImageSharp.fluid} />
          <p>{doc.node.content} </p>
          <p>By {doc.node.author.username}</p>
        </div>
      )
    })}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          content
          Title
          image {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          author {
            username
          }
        }
      }
    }
  }
`
