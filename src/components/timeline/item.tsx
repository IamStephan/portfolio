import React from 'react'
import clsx from 'clsx'

import Heading from '@/components/heading'

interface Props {
  title: string
  subtitle: string
  icon: React.ReactNode
  isActive?: boolean
  isLast?: boolean
}

const TimelineItem: React.FC<Props> = ({
  title,
  subtitle,
  icon,
  isActive,
  isLast,
  children,
}) => {
  return (
    <div className="flex space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10">
      <div className="relative">
        {!isLast && (
          <div className="absolute top-0 h-full -translate-x-1/2 border-l-2 border-gray-600 border-dashed left-1/2" />
        )}

        <div
          className={clsx('relative p-3 border border-gray-600 bg-dark-900', {
            'border-green-900 bg-green-900': isActive,
          })}
        >
          {icon}
        </div>
      </div>

      <div className="flex-1 pb-8 md:pb-12 xl:pb-16">
        <div>
          <Heading isDisplay={false} font="2xs" as="h3" className="mb-1">
            {title}
          </Heading>
          <p className="mb-4 font-bold text-gray-400">{subtitle}</p>
        </div>
        <div className="prose !prose-invert prose-neutral prose-inner prose-sm md:prose-base">
          {children}
        </div>
      </div>
    </div>
  )
}

export default TimelineItem
