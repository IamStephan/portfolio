import React from 'react'
import clsx from 'clsx'
import { Flipped } from 'react-flip-toolkit'
import { FlippedProps, FlipId } from 'flip-toolkit/lib/types'

export interface Props extends Omit<FlippedProps, 'children'> {
  className?: string
  divRef?: React.LegacyRef<HTMLDivElement>
  flipPrefix?: string
}

const getFlipID = (flipId?: FlipId, flipPrefix?: string) => {
  if (!flipId && !flipPrefix) return undefined
  if (!flipPrefix) return flipId
  return `${flipPrefix}-${flipId}`
}

const LogoBase: React.FC<Props> = ({
  className,
  shouldFlip = () => true,
  divRef,
  flipId,
  flipPrefix,
  children,
  ...rest
}) => {
  return (
    <Flipped
      flipId={getFlipID(flipId, flipPrefix)}
      shouldFlip={shouldFlip}
      {...rest}
    >
      <div ref={divRef} className={clsx('w-auto h-full', className)}>
        {children}
      </div>
    </Flipped>
  )
}

export default LogoBase
