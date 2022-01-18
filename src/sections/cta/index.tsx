import React, { Fragment } from 'react'

import Section from '@/templates/section'
import Heading from '@/components/heading'
import Button from '@/components/clickable'

import ResumeIcon from '@/assets/icons/profile-line.svg'
import DownloadIcon from '@/assets/icons/download-2-line.svg'

interface Props {
  title?: string | React.ReactNode
}

const DefaultTitle = (
  <span className="tracking-[0.001em]">
    Think we're a good fit? Let's get <i>talking.</i>
  </span>
)

const CallToAction: React.FC<Props> = ({ title = DefaultTitle }) => {
  return (
    <Section
      sectionGap="none"
      isPadded
      className="flex flex-col items-center justify-center py-16 space-y-6 md:space-y-10 lg:space-y-14 sm:py-24 md:py-32 lg:py-40 bg-dark-500 bg-opacity-30"
    >
      <Heading as="h2" className="max-w-5xl text-center">
        {Array.isArray(title)
          ? title.map((line, i) => (
              <Fragment key={`${line}_${i}`}>
                {line} <br />
              </Fragment>
            ))
          : title}
      </Heading>
      <Button
        as="externalLink"
        isJumbo
        rightIcon={<ResumeIcon />}
        leftIcon={<DownloadIcon />}
      >
        Download Resumé
      </Button>
    </Section>
  )
}

//* Done
export default CallToAction
