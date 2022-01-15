import React from 'react'
import clsx from 'clsx'
import Clickable, {
  Props as ClickableProps,
} from '@/components/clickable_container'

type TButtonType = 'primary' | 'secondary'

interface BaseProps {
  type?: TButtonType
  isJumbo?: boolean
  rightIcon?: React.ReactNode
  leftIcon?: React.ReactNode
  isLoading?: boolean
}

type Props = BaseProps & ClickableProps

const _containerStyles = (
  type: TButtonType,
  isDisabled: boolean,
  hasRightIcon: boolean,
  classNames?: string
) => {
  const base =
    'relative inline-flex items-center py-3 overflow-hidden font-semibold transition-all duration-150 ease-in-out text-gray-50 group cursor-pointer'
  const iconBaseStyles = hasRightIcon
    ? 'pr-14 pl-6 hover:pr-6 hover:pl-14'
    : 'px-6'

  switch (type) {
    case 'primary': {
      const primaryStyles =
        'bg-persian-red-main hover:bg-persian-red-main/80 active:bg-persian-red-main/60'

      return clsx(base, iconBaseStyles, primaryStyles, classNames)
    }

    case 'secondary': {
      const secondaryStyles = 'hover:bg-gray-800 active:bg-gray-700'
      const disabledStyles =
        isDisabled && 'bg-gray-800 cursor-not-allowed opacity-60'
      return clsx(
        base,
        iconBaseStyles,
        secondaryStyles,
        disabledStyles,
        classNames
      )
    }
  }
}

const Button: React.FC<Props> = ({
  type = 'primary',
  isJumbo = false,
  disabled = false,
  isLoading,
  className,
  rightIcon,
  leftIcon = rightIcon,
  children,
  ...rest
}) => {
  return (
    <Clickable
      className={_containerStyles(type, disabled, !!rightIcon, className)}
      {...rest}
    >
      {!!leftIcon && (
        <span
          className={clsx(
            'absolute w-5 duration-200 ease-out left-6 group-hover:translate-x-0 -translate-x-11',
            {
              'w-6 -translate-x-12': isJumbo,
            }
          )}
        >
          {leftIcon}
        </span>
      )}

      <span
        className={clsx({
          'md:text-lg px-1.5 py-2': isJumbo,
          'text-base px-1 py-0': !isJumbo,
        })}
      >
        {children}
      </span>

      {!!rightIcon && (
        <span
          className={clsx(
            'absolute w-5 duration-200 ease-out right-6 group-hover:translate-x-11',
            {
              'w-6 group-hover:translate-x-12': isJumbo,
            }
          )}
        >
          {rightIcon}
        </span>
      )}

      {/* Borders */}
      {type !== 'primary' && (
        <span className="absolute inset-0 transition duration-150 ease-in-out border-2 border-gray-50"></span>
      )}

      {/* Loader */}
      {isLoading && (
        <span
          className={clsx(
            'absolute inset-0 transition duration-150 ease-in-out ',
            {
              'bg-persian-red-main': type === 'primary',
              'border-2 border-gray-50 bg-dark-900': type === 'secondary',
            }
          )}
        >
          <span className="absolute flex items-center justify-center -translate-x-1/2 -translate-y-1/2 w-7 h-7 left-1/2 top-1/2">
            <span className="w-full h-full border-4 rounded-full animate-spin border-l-transparent border-r-transparent border-t-gray-50 border-b-gray-50" />
          </span>
        </span>
      )}
    </Clickable>
  )
}

export default Button
