import React, { useCallback } from 'react'
import clsx from 'clsx'

import Letter from './letter'
import Wings from './wings'
import Ribbon from './ribbon'

type TType = 'main' | 'mini' | 'nano'

const shouldLogoFlip = (prev: any, cur: any) => prev.asPath === cur.asPath

interface Props extends React.HTMLProps<HTMLDivElement> {
  type: TType
  shouldAnimate?: boolean
  wrapperClassName?: string
  flipPrefix?: string
  shouldExit?: boolean
}

const Icon: React.FC<Props> = ({
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
      <div className={clsx('relative', wrapperClassName)}>
        <Letter
          shouldFlip={shouldFlip}
          flipPrefix={flipPrefix}
          className={clsx({
            'h-full w-auto top-0 left-1/2 -translate-x-1/2 absolute':
              type === 'mini' || type === 'main',
          })}
        />

        {type !== 'nano' && (
          <Wings flipPrefix={flipPrefix} shouldFlip={shouldFlip} />
        )}
      </div>

      {type === 'main' && (
        <Ribbon
          flipPrefix={flipPrefix}
          shouldExit={shouldExit}
          shouldFlip={shouldFlip}
        />
      )}
    </div>
  )
}

// TODO: Better handling of exit animations
// TODO: Rather use images or redo ribbon component to decrease size
export default Icon
