import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { Flipper, Flipped } from 'react-flip-toolkit'

import Button from '@/components/button'
import MobileMenu from '@/components/menu_mobile'
import {
  useMobileMenu,
  openMobileMenu,
  closeMobileMenu,
} from '@/stores/mobile_menu'

const MenuButton = () => {
  const { asPath, events } = useRouter()
  const { isOpen } = useMobileMenu()
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    const setAnimatableOn = () => {
      setShouldAnimate(true)
    }

    const setAnimatableOff = () => {
      setShouldAnimate(false)
    }

    /**
     * Note:
     * ======
     * For some reason (Probably related to the menu store)
     * when this component mounts it animates the menu lines.
     * This is an issue if the previous page had a scroll offset.
     * I can't set the flipper decision data to control this with
     * shouldFlip prop. It skips the entire check and just animates
     *
     * So instead I'm listening for route changes to determine
     * if the lines should animate
     */
    setShouldAnimate(true)
    events.on('routeChangeStart', setAnimatableOff)
    events.on('routeChangeComplete', setAnimatableOn)

    return () => {
      events.off('routeChangeStart', setAnimatableOff)
      events.off('routeChangeComplete', setAnimatableOn)
    }
  }, [])

  return (
    <Flipper
      flipKey={`${isOpen ? 'open-menu' : 'close-menu'}-${asPath}`}
      decisionData={{
        asPath,
      }}
    >
      <Button
        className="relative py-2 font-bold font-heading"
        onClick={openMobileMenu}
      >
        <Flipped flipId={shouldAnimate ? 'top-menu-line' : undefined}>
          <div
            className={clsx(
              'absolute w-[40%] top-0 h-0.5 rounded-full bg-gray-50',
              {
                'right-0': isOpen,
                'left-0': !isOpen,
              }
            )}
          />
        </Flipped>

        <span>Menu</span>

        <Flipped flipId={shouldAnimate ? 'bottom-menu-line' : undefined}>
          <div
            className={clsx(
              'absolute bottom-0 w-[40%] h-0.5 rounded-full bg-gray-50',
              {
                'left-0': isOpen,
                'right-0': !isOpen,
              }
            )}
          />
        </Flipped>
      </Button>

      {isOpen && <MobileMenu onCloseRequest={closeMobileMenu} />}
    </Flipper>
  )
}

export default MenuButton
