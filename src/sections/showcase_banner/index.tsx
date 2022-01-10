import React from 'react'
import Image, { ImageProps } from 'next/image'
import clsx from 'clsx'

import Section, { PaddedStyles } from '@/templates/section'
import Heading from '@/components/heading'

interface Props {
  title?: string
  subtitle?: string
  showcase: ImageProps
}

const ShowcaseBanner: React.FC<Props> = ({ title, subtitle, showcase }) => {
  const { width, height, ..._showcase } = showcase

  return (
    <Section
      className="relative min-h-[275px] sm:min-h-[350px] md:min-h-[450px]"
      sectionGap="bottom"
    >
      <Image
        {..._showcase}
        placeholder="blur"
        layout="fill"
        objectFit="cover"
      />

      {title && (
        <div
          className={clsx(
            'absolute inset-0 flex items-center justify-center bg-gray-900/80 flex-col',
            PaddedStyles
          )}
        >
          <Heading
            font="2xl"
            as="h1"
            className="mb-4 text-center sm:mb-6 md:mb-8"
          >
            {title}
          </Heading>

          {subtitle && (
            <Heading font="2xs" as="span" className="italic text-center">
              {subtitle}
            </Heading>
          )}
        </div>
      )}
    </Section>
  )
}

//* DONE
export default ShowcaseBanner
