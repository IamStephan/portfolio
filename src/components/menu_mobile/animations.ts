import { spring } from 'react-flip-toolkit'

const AppearDelay = 100

export const handleWrapperAnim = (
  element: HTMLElement,
  _index: number,
  determinate?: unknown
) => {
  spring({
    onUpdate() {
      element.style.opacity = '1'
    },
    onComplete() {
      if (typeof determinate === 'function') {
        const removeElement = determinate
        removeElement()
      }
    },
  })
}

export const handleContainerAnim = (
  element: HTMLElement,
  _index: number,
  determinate?: unknown
) => {
  let maxHeightAnim = [0, element.getBoundingClientRect().height]
  let opacityAnim = [0.75, 1]

  if (typeof determinate === 'function') {
    maxHeightAnim = maxHeightAnim.reverse()
    opacityAnim = opacityAnim.reverse()
  }

  spring({
    values: {
      maxHeight: maxHeightAnim as [number, number],
      opacity: opacityAnim as [number, number],
    },
    delay: AppearDelay,
    onUpdate({ maxHeight, opacity }: any) {
      element.style.opacity = opacity
      element.style.overflow = 'hidden'
      element.style.maxHeight = `${maxHeight}px`
    },
    onComplete() {
      if (typeof determinate !== 'function') {
        // On Exit
        element.style.overflow = 'auto'
      }
    },
  })
}

export const handleBackdropAnim = (
  element: HTMLElement,
  _index: number,
  determinate: unknown
) => {
  let opacityAnim = [0, 1]

  if (typeof determinate === 'function') {
    opacityAnim = opacityAnim.reverse()
  }

  spring({
    values: {
      opacity: opacityAnim as [number, number],
    },
    onUpdate({ opacity }: any) {
      element.style.opacity = opacity
    },
  })
}
