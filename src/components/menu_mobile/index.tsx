import React, { useEffect } from 'react'
import { Flipped } from 'react-flip-toolkit'
import { useRouter } from 'next/router'

import Heading from '@/components/heading'
import Button from '@/components/clickable'
import Link from '@/components/link'
import ExternalLink from '@/components/external_link'
import Socials from '@/constants/socials'
import Pages from '@/constants/pages'

import ResumeIcon from '@/assets/icons/profile-line.svg'
import DownloadIcon from '@/assets/icons/download-2-line.svg'
import CloseIcon from '@/assets/icons/close-line.svg'
import HorLogo from '@/assets/logos/p-logo-hor.svg'

import {
  handleWrapperAnim,
  handleContainerAnim,
  handleBackdropAnim,
} from './animations'

interface Props {
  onCloseRequest?: () => void
}

const Menu: React.FC<Props> = ({ onCloseRequest = () => {} }) => {
  const { events } = useRouter()

  useEffect(() => {
    events.on('routeChangeComplete', onCloseRequest)

    return () => {
      events.off('routeChangeComplete', onCloseRequest)
    }
  }, [onCloseRequest, events])

  return (
    <Flipped
      flipId="menu-wrapper"
      onAppear={handleWrapperAnim}
      onExit={handleWrapperAnim}
    >
      <div className="fixed inset-0 z-40 md:hidden">
        <Flipped
          flipId="menu-backdrop"
          stagger="staggerwait"
          onAppear={handleBackdropAnim}
          onExit={handleBackdropAnim}
        >
          <div
            className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm"
            onClick={onCloseRequest}
          />
        </Flipped>

        <Flipped
          flipId="menu-container"
          onAppear={handleContainerAnim}
          onExit={handleContainerAnim}
        >
          <div className="absolute flex flex-col max-h-[calc(100%-48px)] overflow-auto overflow-y-auto border border-gray-600 top-6 inset-x-6 bg-dark-900">
            <Link
              to={Pages.home}
              className="flex justify-center max-w-full px-6 py-6"
            >
              <HorLogo className="w-full h-auto max-w-[250px]" />
            </Link>

            <Link to={Pages.about} className="py-6">
              <Heading font="2xl" as="span" className="block text-center">
                About
              </Heading>
            </Link>

            <Link to={Pages.cases()} className="py-6">
              <Heading font="2xl" as="span" className="block text-center">
                Cases
              </Heading>
            </Link>

            <Link to={Pages.contact} className="py-6">
              <Heading font="2xl" as="span" className="block text-center">
                Contact
              </Heading>
            </Link>

            <div className="flex justify-center py-6">
              <Button
                as="button"
                rightIcon={<ResumeIcon />}
                leftIcon={<DownloadIcon />}
              >
                Download Resume
              </Button>
            </div>

            <div className="grid grid-cols-3 mt-4 border-t border-gray-600 divide-x divide-gray-600">
              {Socials.map(({ Logo, url }) => (
                <div key={url} className="aspect-w-3 aspect-h-2 group">
                  <ExternalLink
                    href={url}
                    isTrusted
                    className="flex items-center justify-center group-active:bg-dark-500/40"
                  >
                    <Logo className="w-6 h-6 xs:h-8 xs:w-8" />
                  </ExternalLink>
                </div>
              ))}
            </div>

            <button
              onClick={onCloseRequest}
              className="flex items-center justify-center w-full py-2 border-t border-gray-600"
            >
              <CloseIcon className="w-10 h-10" />
            </button>
          </div>
        </Flipped>
      </div>
    </Flipped>
  )
}

//* Done
export default Menu
