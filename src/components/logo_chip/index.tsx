import React from 'react'
import clsx from 'clsx'

import Chip from '@/components/chip'
import { Logos } from '@/components/logos'

interface Props extends React.HTMLProps<HTMLDivElement> {
  logo: keyof typeof Logos
}

const LogoChip: React.FC<Props> = ({ className, logo }) => {
  const Logo = Logos[logo].element
  const alias = Logos[logo].alias

  return (
    <Chip className={clsx('relative', className)} type="secondary">
      <Logo className="w-auto h-4" />

      <span className="block">{alias}</span>
    </Chip>
  )
}

export default LogoChip
