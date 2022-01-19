import React, { useCallback, useEffect } from 'react'
import Image, { ImageProps } from 'next/image'
import clsx from 'clsx'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'

import Section, {
  PaddedStyles,
  MarginStyles,
  WidthClampMap,
} from '@/templates/section'
import Heading from '@/components/heading'
import Button from '@/components/button'

import ArrowLeft from '@/assets/icons/arrow-left-s-line.svg'
import ArrowRight from '@/assets/icons/arrow-right-s-line.svg'

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

const ContentShowcase: React.FC<Props> = ({ images }) => {
  const [emblaRef, api] = useEmblaCarousel({
    dragFree: true,
    containScroll: 'keepSnaps',
    align: 'center',
  })

  const _handleNext = useCallback(() => {
    _handleScrollClick('forward', api)
  }, [api])

  const _handlePrev = useCallback(() => {
    _handleScrollClick('backward', api)
  }, [api])

  useEffect(() => {
    if (!api) return

    api.reInit()
  }, [api])

  return (
    <Section>
      <div
        className={clsx(
          WidthClampMap.md,
          PaddedStyles,
          'mb-4 sm:mb-6 md:mb-8 lg:mb-12 mx-auto flex justify-between items-end'
        )}
      >
        <Heading font="sm" as="h2" className="">
          Project showcase
        </Heading>

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
      <div ref={emblaRef} className="overflow-hidden">
        {/* container */}
        <div className={clsx('flex mx-64 space-x-12', MarginStyles)}>
          {images.map(({ width, height, ...imageProps }, i) => (
            <div
              key={i}
              className="flex-grow-0 flex-shrink-0 w-full sm:w-1/2 md:w-2/5"
            >
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  {...imageProps}
                  placeholder="blur"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

//* Done
export default ContentShowcase
