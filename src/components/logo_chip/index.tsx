import React from 'react'
import clsx from 'clsx'

import { Logos } from '@/components/logos'

interface Props extends React.HTMLProps<HTMLDivElement> {
  logo: keyof typeof Logos
}

const LogoChip: React.FC<Props> = ({ className, logo }) => {
  const Logo = Logos[logo].element
  const alias = Logos[logo].alias

  return (
    <div
      className={clsx(
        'relative px-3 pr-4 py-1 text-sm md:text-base font-medium bg-gray-900 flex space-x-3 items-center border border-gray-100',
        className
      )}
    >
      <Logo className="w-auto h-4" />

      <span className="block">{alias}</span>
    </div>
  )
}

//* Done
export default LogoChip
