import React, { forwardRef } from 'react'
import clsx from 'clsx'

type TWitdthClamp = 'lg' | 'md' | 'sm' | 'none'
type TSectionGapMode = 'top' | 'bottom' | 'both' | 'none'

interface Props extends React.HTMLProps<HTMLDivElement> {
  as?: 'header' | 'section' | 'footer'
  widthClamp?: TWitdthClamp
  isPadded?: boolean
  sectionGap?: TSectionGapMode
}

export const WidthClampMap: Record<TWitdthClamp, string> = {
  lg: 'max-w-screen-3xl',
  md: 'max-w-screen-2xl',
  sm: 'max-w-screen-xl',
  none: '',
}

export const PaddedStyles = 'px-6 md:px-10 lg:px-14'
export const MarginStyles = 'mx-6 md:mx-10 lg:mx-14'

// NOTE: Beware of margin collapsing
export const SectionGapMap: Record<TSectionGapMode, string> = {
  both: 'my-20 md:my-32 lg:my-40',
  top: 'mt-20 md:mt-32 lg:mt-40',
  bottom: 'mb-20 md:mb-32 lg:mb-40',
  none: '',
}

const SectionTemplate = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<Props>
>(
  (
    {
      as = 'section',
      className,
      widthClamp = 'lg',
      isPadded,
      children,
      sectionGap = 'both',
      ...rest
    },
    ref
  ) => {
    const Element = as
    const _withClamp = WidthClampMap[widthClamp]
    const _sectionGap = SectionGapMap[sectionGap]

    return (
      <Element
        className={clsx(
          'mx-auto',
          {
            [PaddedStyles]: isPadded,
          },
          _withClamp,
          _sectionGap,
          className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </Element>
    )
  }
)

export default SectionTemplate
