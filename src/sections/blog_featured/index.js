import React from 'react'

// Gatsby
import { Link, graphql, useStaticQuery } from 'gatsby'

// Foundation
import Icon from '@foundation/icons_svg'

// Material
import { Typography, Button, Chip } from '@material-ui/core'

// Organisms
import Section from '@organisms/page_section'

// Utils
import { getArticleLink } from '@utils/getLink'

// Styles
import styles from './styles.module.scss'

const query = graphql`
  {
    allMdx(
      sort: {fields: frontmatter___date,order: DESC}
      limit: 3
      filter: {frontmatter: {featured: {eq: true}}}
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          tags
          date(formatString: "DD MMM YY")
        }
        excerpt(pruneLength: 125)
        timeToRead
      }
    }
  }
`

const BlogPreview = () => {
  const { allMdx: { nodes: articles } } = useStaticQuery(query)

  return (
    <Section
      className={styles['blogFeaturedSection']}
    >
      <div
      className={styles['contentContainer']}
      >
        <Typography
          variant='h2'
          component='h2'
          gutterBottom
          className={styles['header']}
        >
          Featured Posts
        </Typography>
        <Typography
          variant='h6'
          gutterBottom
          className={styles['subheader']}
        >
          Exploring exciting topics ranging from the latest trends to in-depth discussions over projects and ideas...
        </Typography>

        <Button
          variant='contained'
          color='primary'
          component={Link}
          to='/blog'
          className={styles['ctaAction']}
          endIcon={(
            <Icon
              className={styles['icon']}
              name='eye-fill'
            />
          )}
        >
          View all
        </Button>
      </div>

      {
        articles.map(article => (
          <Link
            to={getArticleLink(article.fields.slug)}
            key={article.fields.slug}
            className={styles['articleContainer']}
          >
            <Typography
              className={styles['title']}
              variant='h5'
              component='h3'
              gutterBottom
            >
              {article.frontmatter.title}
            </Typography>
            
            <div
              className={styles['tagsContainer']}
            >
              {
                article.frontmatter.tags.map(tag => (
                  <Chip
                    className={styles['tag']}
                    key={tag}
                    label={tag}
                    size='small'
                    color='default'
                  />
                ))
              }
            </div>

            <Typography
              variant='body2'
              paragraph
              className={styles['date']}
            >
              {article.frontmatter.date} ??? <b>{article.timeToRead} min read</b>
            </Typography>

            <Typography
              paragraph
              className={styles['summary']}
            >
              {article.excerpt}
            </Typography>
          </Link>
        ))
      }
    </Section>
  )
}

export default BlogPreview
