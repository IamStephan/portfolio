import React from 'react'

// Gatsby
import { graphql } from 'gatsby'

// Organisms
import Page from '@organisms/page'

// Components
import Content from './components/content'

const ArticleList = (props) => {
  const {
    data,
    pageContext
  } = props

  const articles = data.allMdx.nodes

  const currentPage = pageContext.currentPage
  const pageCount = pageContext.numPages

  return (
    <Page
      title='Blog'
      description={`Have a look at some topics I write about.`}
    >
      <Content
        articles={articles}
        currentPage={currentPage}
        pageCount={pageCount}
      />
    </Page>
  )
}

export default ArticleList

export const qeury = graphql`
  query (
    $limit: Int!,
    $skip: Int!
  ){
    allMdx(
      limit: $limit,
      skip: $skip,
      sort: {
        fields: frontmatter___date,
        order: DESC
      }
    ) {
      nodes {
        fields {
          slug
        }

        frontmatter {
          date(formatString: "DD MMM YY")
          tags
          title
          showcase {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt(pruneLength: 200)
        timeToRead
      } 
    }
  }
`
