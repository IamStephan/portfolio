import React from 'react'
import NextLink from 'next/link'

export interface Props extends React.HTMLProps<HTMLAnchorElement> {
  to: string
}

const Link: React.FC<Props> = ({ to, children, ...rest }) => {
  return (
    <NextLink href={to}>
      <a href={to} {...rest}>
        {children}
      </a>
    </NextLink>
  )
}

export default Link
