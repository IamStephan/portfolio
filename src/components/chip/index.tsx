import React from 'react'
import clsx from 'clsx'

interface Props extends React.HTMLProps<HTMLDivElement> {
  type?: 'primary' | 'secondary'
}

const Chip: React.FC<Props> = ({
  children,
  className,
  type = 'primary',
  ...rest
}) => {
  return (
    <div
      className={clsx(
        'px-3 pr-4 py-1 text-sm md:text-base font-medium flex space-x-3 items-center border',
        {
          'bg-persian-red-main/50 border-persian-red-main': type === 'primary',
          'bg-gray-900 border-gray-100': type === 'secondary',
        },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Chip
