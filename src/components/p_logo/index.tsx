import React, { useCallback } from 'react'
import clsx from 'clsx'

import Main from './main'
import Footer from './footer'

type TType = 'main' | 'mini'

const shouldLogoFlip = (prev: any, cur: any) => prev.asPath === cur.asPath

interface Props extends React.HTMLProps<HTMLDivElement> {
  type: TType
  shouldAnimate?: boolean
  wrapperClassName?: string
  flipPrefix?: string
  shouldExit?: boolean
}

const PersonalLogo: React.FC<Props> = ({
  type,
  className,
  wrapperClassName,
  shouldAnimate = true,
  flipPrefix,
  shouldExit = true,
  ...rest
}) => {
  const shouldFlip = useCallback(
    (prev: Object, cur: Object) => {
      if (!shouldAnimate) return false

      return shouldLogoFlip(prev, cur)
    },
    [shouldAnimate]
  )
  return (
    <div className={clsx('relative', className)} {...rest}>
      <Main shouldFlip={shouldFlip} flipPrefix={flipPrefix} />

      {type === 'main' && (
        <Footer
          flipPrefix={flipPrefix}
          shouldExit={shouldExit}
          shouldFlip={shouldFlip}
        />
      )}
    </div>
  )
}

export default PersonalLogo
