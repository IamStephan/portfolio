import React from 'react'

import Section from '@/templates/section'
import Heading from '@/components/heading'

interface CardProps {
  title: string
  description: string
  items?: Array<string>
}

interface Props {
  title: string
  items: Array<CardProps>
}

const ContentFeatured: React.FC<Props> = ({ title, items }) => {
  return (
    <Section isPadded widthClamp="md">
      <div className="md:max-w-[50%] mb-6 sm:mb-8 md:mb-16">
        <Heading font="md" as="h2">
          {title}
        </Heading>
      </div>

      <div className="grid gap-8 sm:gap-12 lg:gap-16 sm:grid-cols-2 md:grid-cols-3">
        {items.map(({ title, description, items }) => (
          <div key={title}>
            <Heading
              font="xs"
              as="h3"
              className="mb-2 not-italic font-bold md:mb-4 lg:mb-6"
            >
              {title}
            </Heading>
            <p className="text-sm text-gray-50/80">{description}</p>

            {items && (
              <>
                <div className="my-3 sm:my-3 md:my-4 lg:my-5 h-[1px] bg-gray-600" />

                <ul className="flex flex-col space-y-2">
                  {items.map((item, i) => (
                    <li
                      key={item + i}
                      className="flex items-center space-x-8 text-sm"
                    >
                      <div className="w-4 h-0.5 bg-gray-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}

//* Done
export default ContentFeatured
