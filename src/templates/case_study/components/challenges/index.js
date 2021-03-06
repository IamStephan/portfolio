import React from 'react'

// Gatsby
import Img from 'gatsby-image/withIEPolyfill'

// Material
import { Typography } from '@material-ui/core'

// Modules
import Zoom from '@modules/image_zoom'

// Organisms
import Section from '@organisms/page_section'

// Styles
import styles from './styles.module.scss'

/**
 * 
 * @param {{
 *    challenges: Array <{
 *      title: string
 *      content
 *      showcase: *
 *    }>
 * }} props 
 */
const Chanllenges = (props) => {
  const {
    challenges = []
  } = props

  return (
    <Section
      className={styles['challengesSection']}
    >
      <div
        className={styles['headerContainer']}
      >
        <Typography
          variant='h2'
          gutterBottom
          className={styles['header']}
        >
          Challenges and functionalities.
        </Typography>
      </div>
      <div
        className={styles['challengeContainer']}
      >
        {
          challenges?.map(item => (
            <div
              key={item.title}
              className={styles['challenge']}
            >
              <Zoom>
                <div
                  className={styles['showcaseContainer']}
                >
                  <Img
                    className={styles['showcase']}
                    objectFit='contain'
                    fluid={item.showcase.childImageSharp.fluid}
                    alt={item.title}
                  />
                </div>
              </Zoom>
              

              <div
                className={styles['contentContainer']}
              >
                <Typography
                  variant='h4'
                  component='h2'
                  gutterBottom
                  className={styles['title']}
                >
                  {item.title}
                </Typography>

                {
                  item.content?.map((paragraph, i) => (
                    <Typography
                      className={styles['content']}
                      paragraph
                    >
                      {paragraph}
                    </Typography>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </Section>
  )
}

export default Chanllenges
