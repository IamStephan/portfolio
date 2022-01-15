import React, { useState, useCallback, forwardRef } from 'react'
import clsx from 'clsx'

import InfoIcon from '@/assets/icons/information-line.svg'

interface Props extends React.HTMLProps<HTMLElement> {
  containerClassName?: string
  as?: 'text' | 'area'
  error?: string
}

const Input = forwardRef<HTMLElement, Props>(
  (
    {
      className,
      containerClassName,
      onFocus,
      onBlur,
      as = 'text',
      error,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false)
    const Element = as === 'text' ? 'input' : 'textarea'

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
        className={clsx(
          'relative flex flex-col space-y-1.5',
          containerClassName
        )}
      >
        <div className="relative">
          <Element
            onFocus={_handleOnFocus}
            onBlur={_handleOnBlur}
            type="text"
            className={clsx(
              'bg-gray-800 border-none focus:border-none focus:ring-0 block w-full py-3 px-5',
              className
            )}
            ref={ref as any}
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
        {error && (
          <div className="flex items-center space-x-1.5 text-sm text-persian-red-500">
            <InfoIcon className="w-5 h-5" />
            <span>{error}</span>
          </div>
        )}
      </div>
    )
  }
)

export default Input
