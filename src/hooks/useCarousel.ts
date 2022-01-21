import { useCallback } from 'react'
import useEmblaCarousel, {
  EmblaOptionsType,
  EmblaCarouselType,
} from 'embla-carousel-react'

export type TOptions = EmblaOptionsType

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

const useCarousel = (options: TOptions) => {
  const [ref, api] = useEmblaCarousel(options)

  const _handleNext = useCallback(() => {
    _handleScrollClick('forward', api)
  }, [api])

  const _handlePrev = useCallback(() => {
    _handleScrollClick('backward', api)
  }, [api])

  return {
    ref,
    api,
    handleNext: _handleNext,
    handlePrev: _handlePrev,
  }
}

/**
 * Note:
 * =====
 * When there is more than one item inside the
 * carousel visible, the scroll buttons encounter
 * issues where the carousel seems unresponsive.
 *
 * When the snaps are set to contain the carousel
 * tries to keep it that way but doesn't scroll when
 * the next index causes the containment to break.
 */
export default useCarousel
