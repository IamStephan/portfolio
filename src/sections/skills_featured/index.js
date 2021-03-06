import React from 'react'

// Material
import { Typography } from '@material-ui/core'

// Svgs
import { ReactComponent as Screen } from '@svg/abstracts/screen.svg'
import { ReactComponent as Computer } from '@svg/abstracts/computer.svg'
import { ReactComponent as Vault } from '@svg/abstracts/vault.svg'
import { ReactComponent as Launch } from '@svg/abstracts/launch.svg'

// Organisms
import Section from '@organisms/page_section'

// Styles
import styles from './styles.module.scss'

const Domains = [
  {
    domain: 'Front-End',
    content: 'Building performance driven, reliable applications that businesses can rely on.',
    avatar: Screen
  },
  {
    domain: 'Back-End',
    content: 'Implement custom servers or utilise modern-day serverless technologies.',
    avatar: Computer
  },
  {
    domain: 'Databases',
    content: 'Choosing the right database for your application is vital for longevity.',
    avatar: Vault
  },
  {
    domain: 'Dev-Ops',
    content: 'Deploying production-ready applications that real-world businesses can use.',
    avatar: Launch
  },
]

const SkillSet = () => {
  return (
    <Section
      className={styles['skillsFeatured']}
    >
      <div
        className={styles['contentContainer']}
      >
        <Typography
          variant='h2'
          component='h2'
          className={styles['title']}
          gutterBottom
        >
          A well-rounded developer.
        </Typography>

        <Typography
          variant='h5'
          compoennt='p'
          gutterBottom
          className={styles['context']}
        >
          Architecting a product from concept to production, not only using bespoke tooling but creating new libraries on the fly.
        </Typography>

        <div
          className={styles['domainContainer']}
        >
          {
            Domains.map(item => (
              <div
                key={item.domain}
                className={styles['domain']}
              >
                <div
                  className={styles['avatarContainer']}
                >
                  <item.avatar
                    className={styles['avatar']}
                  />
                </div>

                <Typography
                  variant='h5'
                  component='h3'
                  className={styles['header']}
                  gutterBottom
                >
                  {item.domain}
                </Typography>

                <Typography
                  className={styles['content']}
                >
                  {item.content}
                </Typography>
              </div>
            ))
          }
        </div>
      </div>
    </Section>
  )
}

export default SkillSet
