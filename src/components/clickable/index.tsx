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
}

type Props = BaseProps & ClickableProps

const Button: React.FC<Props> = ({
  type = 'primary',
  isJumbo,
  className,
  disabled,
  rightIcon,
  // Force second icon to show i there is an icon
  leftIcon = rightIcon,
  children,
  ...rest
}) => {
  return (
    <Clickable
      className={clsx(
        'relative inline-flex items-center py-3 overflow-hidden font-semibold transition-all duration-150 ease-in-out text-gray-50 group cursor-pointer',
        {
          'pr-14 pl-6 hover:pr-6 hover:pl-14': !!rightIcon,
          'px-6': !rightIcon,
          'bg-persian-red-main hover:bg-persian-red-main hover:bg-opacity-80':
            type === 'primary',
          'hover:bg-gray-800': type === 'secondary',
        },
        className
      )}
      {...rest}
    >
      {/* Right icon */}
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

      {/* left Icon */}
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

      {/* Text */}
      <span
        className={clsx({
          'text-lg px-2 py-1': isJumbo,
        })}
      >
        {children}
      </span>

      {/* Borders */}
      <span
        className={clsx(
          'absolute inset-0 border-2  transition duration-150 ease-in-out',
          {
            'border-none': type === 'primary',
            'border-gray-50': type === 'secondary',
          }
        )}
      ></span>
    </Clickable>
  )
}

// TODO: Implement active, focus states
// TODO: Implement disabled state
// TODO: Cleanup Component
export default Button
