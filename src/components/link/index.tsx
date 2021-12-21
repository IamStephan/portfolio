import React from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import { matchURL } from '@/utils/matchURL'

export interface Props extends React.HTMLProps<HTMLAnchorElement> {
  className?: string
  activeClassName?: string
  activePath?: string | Array<string>
  to: string
}

const Link: React.FC<Props> = ({
  children,
  className,
  activeClassName,
  activePath,
  to,
  ...rest
}) => {
  const { asPath } = useRouter()
  const pathToMatch = activePath || to

  return (
    <NextLink href={to}>
      <a
        className={clsx(className, {
          [activeClassName || '']: matchURL(pathToMatch, asPath),
        })}
        {...rest}
      >
        {children}
      </a>
    </NextLink>
  )
}

export default Link
