import React from 'react'
import clsx from 'clsx'

import Section from '@/templates/section'
import Heading from '@/components/heading'
import Link from '@/components/link'
import ExternalLink from '@/components/external_link'
import Pages from '@/constants/pages'
import Socials from '@/constants/socials'

import NextLogo from '@/assets/logos/nextdotjs.svg'
import HeartIcon from '@/assets/icons/heart-fill.svg'

export interface Props {
  hasTopLine?: boolean
}

const Footer: React.FC<Props> = ({ hasTopLine }) => {
  return (
    <Section as="footer" className="sticky top-[100vh]" sectionGap="none">
      <nav
        className={clsx(
          'grid grid-cols-1 border-b border-gray-600 divide-y divide-gray-600 md:divide-y-0 md:divide-x md:grid-cols-3',
          {
            'border-t': hasTopLine,
          }
        )}
      >
        <Link
          to={Pages.about}
          className="relative flex justify-center py-20 overflow-hidden cursor-pointer group"
        >
          <Heading font="lg" as="span" className="z-10">
            About
          </Heading>
          <div className="absolute w-full duration-300 scale-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-dark-500/40 group-hover:scale-110 left-1/2 top-1/2 aspect-w-1 aspect-h-1"></div>
        </Link>
        <Link
          to={Pages.cases()}
          className="relative flex justify-center py-20 overflow-hidden cursor-pointer group"
        >
          <Heading font="lg" as="span" className="z-10">
            Cases
          </Heading>
          <div className="absolute w-full duration-300 scale-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-dark-500/40 group-hover:scale-110 left-1/2 top-1/2 aspect-w-1 aspect-h-1"></div>
        </Link>
        <Link
          to={Pages.contact}
          className="relative flex justify-center py-20 overflow-hidden cursor-pointer group"
        >
          <Heading font="lg" as="span" className="z-10">
            Contact
          </Heading>
          <div className="absolute w-full duration-300 scale-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-dark-500/40 group-hover:scale-110 left-1/2 top-1/2 aspect-w-1 aspect-h-1"></div>
        </Link>
      </nav>

      {/* Meta */}
      <section className="grid grid-cols-1 md:grid-cols-3">
        <div className="flex items-center justify-center py-6 text-lg text-center md:py-0 md:col-span-2">
          <span>Powered by</span>
          <NextLogo className="h-5 px-2" />
          <span>with</span>
          <HeartIcon className="h-6 pl-2 text-persian-red-main" />
        </div>
        <nav className="grid grid-cols-3 row-start-1 border-b border-gray-600 divide-x divide-gray-600 md:border-l md:border-b-0 md:col-start-3">
          {Socials.map(({ Logo, url, name }) => (
            <ExternalLink
              href={url}
              key={url}
              isTrusted
              className="relative flex items-center justify-center py-6 overflow-hidden cursor-pointer group"
              aria-label={`View my ${name} profile`}
            >
              <Logo className="z-10 w-auto h-8 md:h-6 lg:h-8" />
              <div className="absolute w-full duration-200 scale-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-dark-500/40 group-hover:scale-110 left-1/2 top-1/2 aspect-w-1 aspect-h-1"></div>
            </ExternalLink>
          ))}
        </nav>
      </section>
    </Section>
  )
}

//* Done
export default Footer
