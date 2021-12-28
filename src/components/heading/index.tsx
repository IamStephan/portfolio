import React from 'react'
import clsx from 'clsx'

type TFontSIzes = '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
type TElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'

interface Props extends React.HTMLProps<HTMLHeadingElement> {
  font?: TFontSIzes
  as?: TElements
  alignBaseline?: boolean
}

/**
 * NOTE:
 * ======
 * Tailwind already has a non linear scale for font sizes
 * (Something between Major and Minor third scaling: https://type-scale.com/)
 * So having the type scale linearly in numeric values based on the breakpoints
 * yields a concise scaling system.
 *
 */
const FontSizes: Record<TFontSIzes, string> = {
  '2xl': 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl',
  xl: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl',
  lg: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl',
  md: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
  sm: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl',
  xs: 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl',
}

const Heading: React.FC<Props> = ({
  as = 'h1',
  font = 'lg',
  children,
  className,
  ...rest
}) => {
  const Element = as
  const fontSize = FontSizes[font]

  return (
    <Element
      className={clsx('font-black font-heading', fontSize, className)}
      {...rest}
    >
      {children}
    </Element>
  )
}

export default Heading
