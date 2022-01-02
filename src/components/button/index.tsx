import React from 'react'

export interface Props
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'type'> {
  nativeType: 'button' | 'reset' | 'submit'
}

const Button: React.FC<Props> = ({
  nativeType = 'submit',
  children,
  ...rest
}) => {
  return (
    <button type={nativeType} {...rest}>
      {children}
    </button>
  )
}

export default Button
