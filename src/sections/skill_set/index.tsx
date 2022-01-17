import React from 'react'
import clsx from 'clsx'

import Section, { PaddedStyles, WidthClampMap } from '@/templates/section'
import Heading from '@/components/heading'
import { Logos } from '@/components/logos'

interface Props {
  title: string
  action?: React.ReactNode
}

const SkillSet: React.FC<Props> = ({ title, action }) => {
  return (
    <Section>
      <div
        className={clsx(
          'flex mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-12 space-x-6 items-end',
          WidthClampMap.md,
          PaddedStyles
        )}
      >
        <Heading as="h2" font="sm" className="flex-1 text-center md:text-left">
          {title}
        </Heading>

        {action && <div className="hidden md:inline-flex">{action}</div>}
      </div>

      <section className="py-8 bg-[#313131] bg-opacity-20 flex flex-nowrap overflow-hidden justify-center">
        {Array.from({ length: 3 }).map((_, i) => (
          <ul
            key={i}
            className="flex flex-shrink-0 text-xl font-bold font-heading motion-safe:animate-marquee marquee-dur-skills"
          >
            {Object.entries(Logos).map(([key, { alias, element: Logo }]) => (
              <li key={key} className="flex items-center px-6 md:px-10">
                <Logo className="w-8 h-8 mr-4" />
                <span className="font-bold">{alias}</span>
              </li>
            ))}
          </ul>
        ))}
      </section>

      {action && (
        <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 lg:mt-12 md:hidden">
          {action}
        </div>
      )}
    </Section>
  )
}

//* Done
export default SkillSet
