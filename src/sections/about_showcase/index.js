import React from 'react'

// Gatsby
import { Link } from 'gatsby'

// Foundation
import Icon from '@foundation/icons_svg'

// Material
import { Typography, Button } from '@material-ui/core'

// SVGs
import { ReactComponent as Book } from '@svg/abstracts/book.svg'
import { ReactComponent as Jump } from '@svg/abstracts/jump.svg'

// Organisms
import Section from '@organisms/page_section'

// Styles
import styles from './styles.module.scss'

const AboutShowcase = () => {
  return (
    <Section
      className={styles['aboutShowcaseSection']}
    >
      <div
        className={styles['aboutShowcaseContainer']}
      >
        <div
          className={styles['bgContainer']}
        >
          <Book
            className={styles['bg']}
          />
        </div>

        <div
          className={styles['showcaseContainer']}
        >
          <Jump
            className={styles['showcase']}
          />
        </div>

        <div
          className={styles['headerContainer']}
        >
          <Typography
            variant='h1'
            gutterBottom
            className={styles['header']}
          >
            Hi, my name is Stephan
          </Typography>

          <Typography
            variant='h3'
            className={styles['subheader']}
            gutterBottom
          >
            I am a Software developer.
          </Typography>

          <div
            className={styles['actionContainer']}
          >
            <Button
              size='large'
              variant='contained'
              color='primary'
              component={Link}
              to='/studies'
              endIcon={(
                <Icon
                  name='eye-fill'
                />
              )}
            >
              See my work
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default AboutShowcase
