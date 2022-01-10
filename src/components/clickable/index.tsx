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
  disabled?: boolean
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
  className,
  disabled = false,
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
    </Clickable>
  )
}

//* Done
export default Button
