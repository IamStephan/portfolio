import React from 'react'
import { useMedia } from 'react-use'

import Section from '@/templates/section'
import Heading from '@/components/heading'
import Logo from '@/components/p_logo'
import screens from '@/constants/screens'

interface Props {
  title: string
  message: string
  action: React.ReactNode
}

const EmptyState: React.FC<Props> = ({ title, message, action }) => {
  const isMobile = useMedia(`(min-width: ${screens.lg})`, true)

  return (
    <Section isPadded widthClamp="md" className="space-y-8">
      <div className="flex justify-center mx-8">
        <Logo
          type={isMobile ? 'main' : 'mini'}
          flipPrefix="empty"
          shouldExit={false}
        />
      </div>
      <div>
        <Heading font="md" className="mb-2 text-center">
          {title}
        </Heading>
        <p className="text-center text-gray-400 lg:text-lg">{message}</p>
      </div>

      <div className="flex justify-center">{action}</div>
    </Section>
  )
}

//* Done
export default EmptyState
