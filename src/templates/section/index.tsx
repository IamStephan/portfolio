import React from 'react'
import clsx from 'clsx'

type TWitdthClamp = 'lg' | 'md' | 'sm' | 'none'
type TSectionGapMode = 'top' | 'bottom' | 'both' | 'none'

interface Props extends React.HTMLProps<HTMLDivElement> {
  as?: 'header' | 'section' | 'footer'
  widthClamp?: TWitdthClamp
  isPadded?: boolean
  sectionGap?: TSectionGapMode
}

const WidthClampMap: Record<TWitdthClamp, string> = {
  lg: 'max-w-screen-3xl',
  md: 'max-w-screen-2xl',
  sm: 'max-w-screen-xl',
  none: '',
}

// NOTE: Beware of margin collapsing
const SectionGapMap: Record<TSectionGapMode, string> = {
  both: 'my-20 md:my-32 lg:my-40',
  top: 'mt-20 md:mt-32 lg:mt-40',
  bottom: 'mb-20 md:mb-32 lg:mb-40',
  none: '',
}

const SectionTemplate: React.FC<Props> = ({
  as = 'section',
  className,
  widthClamp = 'lg',
  isPadded,
  children,
  sectionGap = 'both',
  ...rest
}) => {
  const Element = as
  const _withClamp = WidthClampMap[widthClamp]
  const _sectionGap = SectionGapMap[sectionGap]

  return (
    <Element
      className={clsx(
        'mx-auto',
        {
          'px-6 md:px-10 lg:px-14': isPadded,
        },
        _withClamp,
        _sectionGap,
        className
      )}
      {...rest}
    >
      {children}
    </Element>
  )
}

export default SectionTemplate
