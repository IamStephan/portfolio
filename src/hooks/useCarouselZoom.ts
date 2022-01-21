import { useEffect, useState, useCallback } from 'react'
import { EmblaCarouselType } from 'embla-carousel-react'
const useCarouselZoom = (api?: EmblaCarouselType) => {
  const [activeZoom, setActiveZoom] = useState(-1)
  const [isClickable, setIsClickable] = useState(true)

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

  return {
    activeIndex: activeZoom,
    handleZoomIn: _handleZoomOpen,
    handleZoomOut: _handleZoomClose,
  }
}

export default useCarouselZoom
