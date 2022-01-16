import React from 'react'
import clsx from 'clsx'

import Section from '@/templates/section'
import Heading from '@/components/heading'
import Link from '@/components/external_link'
import Form from '@/components/form'
import Socials from '@/constants/socials'

const Infos = [
  {
    label: 'Email',
    text: 'stephanburger54@gmail.com',
    url: 'mailto:stephanburger54@gmail.com',
  },
  {
    label: 'Phone Number',
    text: '(+27) 62 909 8820',
    url: 'tel:+27629098820',
  },
]

// The default section gap on the top is way too big
const TopSecitonGap = 'mt-0 md:mt-16 lg:mt-20'

const ContactForm: React.FC = () => {
  return (
    <Section
      widthClamp="md"
      isPadded
      sectionGap="bottom"
      className={clsx(
        'flex flex-col space-y-6 lg:space-y-0 lg:space-x-8 xl:space-x-16 lg:flex-row',
        TopSecitonGap
      )}
    >
      <div className="lg:max-w-[30%] xl:max-w-[40%] w-full grid grid-rows-[auto,1fr,auto] flex-col justify-between gap-6">
        <Heading font="md" as="h1">
          Lets get talking!
        </Heading>

        <div className="flex flex-col items-start justify-center space-y-4">
          {Infos.map(({ label, text, url }) => (
            <Link key={url} href={url}>
              <span className="block text-sm font-medium text-gray-400">
                {label}
              </span>
              <span className="block font-mono">{text}</span>
            </Link>
          ))}
        </div>

        <div className="grid gap-y-2 gap-x-6 sm:grid-flow-col lg:grid-flow-row xl:grid-flow-col auto-cols-min">
          {Socials.map(({ name, Logo, url }) => (
            <Link
              key={url}
              href={url}
              isTrusted
              className="flex items-baseline space-x-3"
            >
              <Logo className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-mono text-lg text-gray-50/80">{name}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="self-end flex-1 w-full max-w-3xjustify-self-end">
        <Form />
      </div>
    </Section>
  )
}

//* Done
export default ContactForm
