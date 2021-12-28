import React from 'react'

type ExternalLinkProps = Omit<
  React.HTMLProps<HTMLAnchorElement>,
  'target' | 'rel'
>

export interface Props extends ExternalLinkProps {
  isTrusted?: boolean
}

const ExternalLink: React.FC<Props> = ({
  children,
  isTrusted = false,
  ...rest
}) => {
  return (
    <a
      target="_blank"
      rel={`noreferrer noopener${!isTrusted ?? ' nofollow'}`}
      {...rest}
    >
      {children}
    </a>
  )
}

export default ExternalLink
