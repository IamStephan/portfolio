import React from 'react'
import clsx from 'clsx'

import Section from '@/templates/section'
import Heading from '@/components/heading'
import ProseStyles from '@/constants/prose'

export interface Props {
  title: string | React.ReactNode
  proseContent?: boolean
}

const ContentColumn: React.FC<Props> = ({
  title,
  children,
  proseContent = true,
}) => {
  return (
    <Section
      widthClamp="md"
      isPadded
      className="flex flex-col space-y-2 sm:space-y-4 lg:space-y-0 lg:space-x-8 xl:space-x-16 lg:flex-row"
    >
      <div className="lg:max-w-[30%] xl:max-w-[40%] w-full">
        {typeof title === 'string' ? (
          <Heading font="md" as="h2" className="sticky top-10">
            {title}
          </Heading>
        ) : (
          title
        )}
      </div>
      <div
        className={clsx('flex-1 max-w-3xl justify-self-end w-full self-end', {
          [ProseStyles]: proseContent,
        })}
      >
        {children}
      </div>
    </Section>
  )
}

//* Done
export default ContentColumn
