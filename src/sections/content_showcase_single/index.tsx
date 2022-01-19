import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import Image, { ImageProps } from 'next/image'
import { Controlled } from 'react-medium-image-zoom'
import clsx from 'clsx'

import Section, { PaddedStyles, MarginStyles } from '@/templates/section'
import Heading from '@/components/heading'
import Button from '@/components/button'

import ArrowLeft from '@/assets/icons/arrow-left-s-line.svg'
import ArrowRight from '@/assets/icons/arrow-right-s-line.svg'

import 'react-medium-image-zoom/dist/styles.css'

interface Props {
  images: Array<ImageProps>
}

const _handleScrollClick = (
  direction: 'forward' | 'backward',
  api?: EmblaCarouselType
) => {
  if (!api) return
  const slides = api.slideNodes().length
  const currentIndex = api.selectedScrollSnap()
  let scrollToIndex: number

  switch (direction) {
    case 'forward': {
      scrollToIndex = currentIndex === slides - 1 ? 0 : currentIndex + 1
      break
    }

    case 'backward': {
      scrollToIndex = currentIndex === 0 ? slides - 1 : currentIndex - 1
      break
    }
  }

  api.scrollTo(scrollToIndex)
}

const ContentShowcaseSingle: React.FC<Props> = ({ images }) => {
  const [activeZoom, setActiveZoom] = useState(-1)
  const [isClickable, setIsClickable] = useState(true)

  const [emblaRef, api] = useEmblaCarousel({
    dragFree: true,
    containScroll: 'keepSnaps',
    align: 'center',
  })

  const _handleZoomOpen = useCallback(
    (zoomIndex: number) => () => {
      if (activeZoom === -1 && isClickable) {
        setActiveZoom(zoomIndex)
      }
    },
    [activeZoom, isClickable, setActiveZoom]
  )

  const _handleZoomClose = useCallback(
    (zoom: boolean) => {
      if (!zoom) {
        setActiveZoom(-1)
      }
    },
    [setActiveZoom]
  )

  const _handleNext = useCallback(() => {
    _handleScrollClick('forward', api)
  }, [api])

  const _handlePrev = useCallback(() => {
    _handleScrollClick('backward', api)
  }, [api])

  useEffect(() => {
    if (!api) return

    const _canNotClick = () => setIsClickable(false)
    const _canClick = () => setIsClickable(true)

    api.reInit()

    api.on('scroll', _canNotClick)
    api.on('settle', _canClick)

    return () => {
      api.off('scroll', _canNotClick)
      api.off('settle', _canClick)
    }
  }, [api])

  return (
    <Section widthClamp="md">
      <div
        className={clsx(
          PaddedStyles,
          'mb-4 sm:mb-6 md:mb-8 lg:mb-12 mx-auto flex justify-between items-end'
        )}
      >
        <div>
          <Heading font="sm" as="h2" className="mb-2">
            Project showcase
          </Heading>
          <p className="text-sm italic text-gray-500">
            (<span className="md:hidden">Tap</span>
            <span className="hidden md:inline">Click</span> to zoom)
          </p>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <Button
            onClick={_handlePrev}
            className="flex items-center justify-center p-2 duration-150 rounded-full sm:p-2 ring-1 ring-gray-50 hover:bg-gray-800 active:bg-gray-700"
          >
            <ArrowLeft className="pr-0.5 w-7 h-7" />
          </Button>
          <Button
            onClick={_handleNext}
            className="flex items-center justify-center p-2 rounded-full md:p-2 ring-1 ring-gray-50 hover:bg-gray-800 active:bg-gray-700"
          >
            <ArrowRight className="pl-0.5 w-7 h-7" />
          </Button>
        </div>
      </div>

      {/* Wrapper */}
      <div ref={emblaRef} className="overflow-hidden bg-dark-900/75">
        {/* container */}
        <div className={clsx('flex mx-44 space-x-12', MarginStyles)}>
          {images.map(({ width, height, ...imageProps }, i) => (
            <div className="flex-shrink-0" key={i} onClick={_handleZoomOpen(i)}>
              <Controlled
                isZoomed={i === activeZoom}
                onZoomChange={_handleZoomClose}
                key={i}
                zoomMargin={75}
                overlayBgColorEnd="rgb(12 14 15 / 0.75)"
              >
                <div
                  key={i}
                  className="relative w-auto h-56 sm:h-72 md:h-80 lg:h-96"
                >
                  <img
                    height={height}
                    width={width}
                    className="w-auto h-full min-h-full opacity-0"
                    aria-hidden
                  />

                  <Image
                    {...imageProps}
                    placeholder="blur"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Controlled>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

//* Done
export default ContentShowcaseSingle
