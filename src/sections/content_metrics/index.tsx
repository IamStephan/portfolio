import React from 'react'

import Section from '@/templates/section'
import Heading from '@/components/heading'

interface IItem {
  metric: string
  text: string
}

interface Props {
  title?: string
  items: Array<IItem>
}

const ContentMetric: React.FC<Props> = ({ title = 'Metrics', items }) => {
  return (
    <Section isPadded widthClamp="md">
      <div className="relative grid gap-8 py-8 border-t border-b border-gray-800 sm:py-10 md:py-14 lg:py-16 sm:gap-12 lg:gap-16 lg:grid-cols-3">
        <div>
          <Heading font="md" as="h2" className="sticky top-10">
            {title}
          </Heading>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
          {items.map(({ metric, text }, i) => (
            <div className="max-w-xs" key={i}>
              <Heading
                font="sm"
                as="h3"
                className="mb-2 uppercase md:mb-4 lg:mb-6"
              >
                {metric}
              </Heading>
              <p className="text-gray-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

//* Done
export default ContentMetric
