import React, { useState, useCallback } from 'react'
import clsx from 'clsx'

import InputContainer, {
  Props as InputProps,
} from '@/components/input_container'

interface BaseProps {
  containerClassName?: string
}

type Props = BaseProps & InputProps

const Input: React.FC<Props> = ({
  className,
  containerClassName,
  onFocus,
  onBlur,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const _handleOnFocus = useCallback(
    (e) => {
      setIsFocused(true)

      if (typeof onFocus === 'function') {
        onFocus(e)
      }
    },
    [setIsFocused, onFocus]
  )

  const _handleOnBlur = useCallback(
    (e) => {
      setIsFocused(false)

      if (typeof onBlur === 'function') {
        onBlur(e)
      }
    },
    [setIsFocused, onBlur]
  )

  return (
    <div
      className={clsx('relative flex flex-col space-y-1.5', containerClassName)}
    >
      <div className="relative">
        <InputContainer
          onFocus={_handleOnFocus}
          onBlur={_handleOnBlur}
          type="text"
          className={clsx(
            'bg-gray-800 border-none focus:border-none focus:ring-0 block w-full py-3 px-5',
            className
          )}
          {...rest}
        />
        <div
          className={clsx(
            'transform -translate-x-1/2 duration-150 left-1/2 -translate-y-1/2 absolute bottom-0 h-0.5 bg-gray-400',
            {
              'w-full': isFocused,
              'w-0': !isFocused,
            }
          )}
        />
      </div>
    </div>
  )
}

//* Done
export default Input
