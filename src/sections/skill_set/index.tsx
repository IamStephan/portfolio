import React from 'react'
import clsx from 'clsx'

import Section, { PaddedStyles } from '@/templates/section'
import Heading from '@/components/heading'
import { Logos } from '@/components/logos'

interface Props {
  title: string
}

const SkillSet: React.FC<Props> = ({ title }) => {
  return (
    <Section>
      <Heading
        as="h2"
        font="sm"
        className={clsx(
          'mb-4 text-center sm:mb-6 md:mb-8 lg:mb-12',
          PaddedStyles
        )}
      >
        {title}
      </Heading>
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
    </Section>
  )
}

//* Done
export default SkillSet
