import React from 'react'
import clsx from 'clsx'

import Section from '@/templates/section'
import Heading from '@/components/heading'
import Button from '@/components/clickable'
import { useLoaderStore } from '@/stores/loader'
import Pages from '@/constants/pages'

import ResumeIcon from '@/assets/icons/profile-line.svg'
import BriefcaseIcon from '@/assets/icons/briefcase-4-line.svg'
import DownloadIcon from '@/assets/icons/download-2-line.svg'
import ArrowIcon from '@/assets/icons/arrow-right-line.svg'

const IndentStyles = 'sm:ml-16 md:ml-32 lg:ml-60'

const Hero = () => {
  const { isLoading } = useLoaderStore()

  return (
    <Section sectionGap="bottom" isPadded className="overflow-hidden">
      <div
        className={clsx(
          'flex flex-col items-start pb-6 sm:pt-12 sm:pb-8 md:pt-20 md:pb-12 lg:pt-36 lg:pb-24',
          'delay-300 transition-transform duration-1000 ease-out',
          {
            'perspective-box': !isLoading,
          }
        )}
      >
        <Heading
          className="flex flex-col mt-3 mb-1 sm:mt-0 sm:mb-2 lg:mb-3 xl:mb-4"
          font="xl"
        >
          <span>Hey, I'm Stephan</span>
          <Heading
            font="sm"
            as="span"
            className={clsx(
              '!not-italic inline-block my-1 sm:my-2 lg:my-3 xl:my-5 font-bold text-gray-500 text',
              IndentStyles
            )}
          >
            and I'm a
          </Heading>
          <span className={IndentStyles}>Frontend Developer</span>
        </Heading>

        <p
          className={clsx(
            'mb-8 md:mb-12 md:text-lg text-gray-500 font-heading',
            IndentStyles
          )}
        >
          Writting <i>clean</i>, <i>maintainable</i> and <i>scalable</i> code
          that pushes the <strong>envelope</strong>.
        </p>

        <div
          className={clsx(
            'flex flex-col self-stretch space-y-4 xs:self-start sm:flex-row sm:space-y-0 sm:space-x-8',
            IndentStyles
          )}
        >
          <Button
            to={Pages.cases()}
            isJumbo={true}
            type="secondary"
            rightIcon={<BriefcaseIcon />}
            leftIcon={<ArrowIcon />}
          >
            Case Studies
          </Button>
          <Button
            as="externalLink"
            isJumbo={true}
            rightIcon={<ResumeIcon />}
            leftIcon={<DownloadIcon />}
          >
            Download Resumé
          </Button>
        </div>
      </div>
    </Section>
  )
}

//* Done
export default Hero
