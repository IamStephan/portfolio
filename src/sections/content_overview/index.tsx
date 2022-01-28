import React from 'react'

import Section from '@/templates/section'
import Heading from '@/components/heading'
import Button from '@/components/clickable'

import RepoIcon from '@/assets/icons/git-repo-line.svg'
import PrivateRepoIcon from '@/assets/icons/git-repo-private-line.svg'
import EarthIcon from '@/assets/icons/earth-line.svg'
import ExternalLinkIcon from '@/assets/icons/external-link-line.svg'
import ForbidIcon from '@/assets/icons/forbid-line.svg'
import LogoChip from '@/components/logo_chip'

interface Props {
  overview: string
  stack: Array<string>
  role: string
  repo?: string
  liveLink?: string
}

const ContentOverview: React.FC<Props> = ({
  repo,
  liveLink,
  overview,
  stack,
  role,
}) => {
  return (
    <Section
      isPadded
      widthClamp="md"
      className="grid gap-12 sm:gap-16 md:gap-24 md:grid-cols-2 lg:grid-cols-3"
    >
      <div className="lg:col-span-2">
        <Heading as="h2" font="md" className="mb-2 sm:mb-4">
          Project Overview
        </Heading>
        <p className="mb-4 text-gray-300 sm:mb-6">{overview}</p>

        <div className="flex flex-col space-y-6 xs:flex-row xs:space-y-0 xs:space-x-6">
          {repo ? (
            <Button
              as="externalLink"
              type="secondary"
              href={repo}
              rightIcon={<RepoIcon />}
              leftIcon={<ExternalLinkIcon />}
            >
              Repository
            </Button>
          ) : (
            // Cosmetic button, Should probably add a tooltip
            <Button
              as="externalLink"
              type="secondary"
              rightIcon={<PrivateRepoIcon />}
              leftIcon={<ForbidIcon />}
              disabled
            >
              Private Repo
            </Button>
          )}

          {liveLink && (
            <Button
              as="externalLink"
              href={liveLink}
              rightIcon={<EarthIcon />}
              leftIcon={<ExternalLinkIcon />}
            >
              Visit Website
            </Button>
          )}
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <div>
          <Heading font="3xs" as="h3" className="mb-0">
            Role
          </Heading>
          <p className="text-gray-300">{role}</p>
        </div>

        <div>
          <Heading font="3xs" as="h3" className="mb-2">
            Stack
          </Heading>
          <ul className="flex flex-wrap -mt-1 -ml-1">
            {stack.map((item) => (
              <li key={item} className="m-1">
                <LogoChip logo={item as any} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

//* Done
export default ContentOverview
