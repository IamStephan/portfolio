import React from 'react'

export interface Props extends React.HTMLProps<HTMLButtonElement> {
  /**
   * Without this set explicitly typescript complains
   */
  type?: 'reset' | 'submit' | 'button'
}

const Button: React.FC<Props> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>
}

// TODO: Fix type to not conflict with clickable types
export default Button
