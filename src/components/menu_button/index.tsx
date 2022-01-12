import React, { useEffect, useState } from 'react'
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
  const { isOpen } = useMobileMenu()
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    /**
     * Note:
     * ======
     * For some reason (Probably related to the menu store)
     * when this component mounts it animates the menu lines.
     * This is an issue if the previous page had a scroll offset.
     * I can't set the flipper decision data to control this with
     * shouldFlip prop. It skips the entire check and just animates
     *
     * So instead I'm just waiting until the component has mounted and
     * and the set the flipIds (Flipped with undefined ids do not animate).
     */
    setShouldAnimate(true)
  }, [])

  return (
    <Flipper flipKey={isOpen ? 'open-menu' : 'close-menu'}>
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

//* Done
export default MenuButton
