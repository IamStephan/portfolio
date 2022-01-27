import React from 'react'

import Section from '@/templates/section'
import Heading from '@/components/heading'
import Logo from '@/components/p_logo'

interface Props {
  title: string
  message: string
  action: React.ReactNode
}

const EmptyState: React.FC<Props> = ({ title, message, action }) => {
  return (
    <Section isPadded widthClamp="md" className="space-y-8">
      <div className="flex justify-center h-16 mx-8 md:h-24">
        <Logo type="mini" flipPrefix="empty" shouldExit={false} />
      </div>
      <div className="flex flex-col items-center">
        <Heading font="md" className="mb-2 text-center">
          {title}
        </Heading>
        <p className="max-w-sm text-center text-gray-400 lg:text-lg">
          {message}
        </p>
      </div>

      <div className="flex justify-center">{action}</div>
    </Section>
  )
}

//* Done
export default EmptyState
