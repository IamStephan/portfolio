import React from 'react'

import Section from '@/templates/section'
import Heading from '@/components/heading'
import Button from '@/components/clickable'
import Logo from '@/components/p_logo'

import HomeIcon from '@/assets/icons/home-smile-2-line.svg'
import ArrowIcon from '@/assets/icons/arrow-right-line.svg'

const NotFoundSection = () => {
  return (
    <Section isPadded className="flex flex-col items-center space-y-6">
      <div className="flex justify-center w-full pb-2">
        <Logo flipPrefix="not-found" type="nano" wrapperClassname="h-16" />
      </div>
      <Heading as="h1" font="md" className="text-center">
        Page Not Found
      </Heading>

      <p className="max-w-md text-lg text-center text-gray-300">
        The page you are looking for doesn't exist or has been moved
      </p>

      <Button to="/" rightIcon={<HomeIcon />} leftIcon={<ArrowIcon />}>
        Go Back Home
      </Button>
    </Section>
  )
}

//* Done
export default NotFoundSection
