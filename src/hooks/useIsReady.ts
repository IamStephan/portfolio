import create from 'zustand'
import { combine } from 'zustand/middleware'
import FontFaceObserver from 'fontfaceobserver'

interface IFontFace {
  family: string
  weight?:
    | `light`
    | `normal`
    | `bold`
    | `bolder`
    | `100`
    | `200`
    | `300`
    | `400`
    | `500`
    | `600`
    | `700`
    | `800`
    | `900`
  style?: `normal` | `italic` | `oblique`
  stretch?:
    | `normal`
    | `ultra-condensed`
    | `extra-condensed`
    | `condensed`
    | `semi-condensed`
    | `semi-expanded`
    | `expanded`
    | `extra-expanded`
    | `ultra-expanded`
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const fontsloaded = async (fonts: Array<IFontFace>, timeout: number) => {
  const promises = fonts.map(({ family, weight, style, stretch }) =>
    new FontFaceObserver(family, {
      weight,
      style,
      stretch,
    }).load(undefined, timeout)
  )

  // Resolve regardless of font loaded state
  await Promise.allSettled(promises)
}

const defaultTimeout = 500

export const useIsReady = create(
  combine({ isReady: false }, (set) => ({
    initialize: async (fonts: Array<IFontFace>) => {
      const promises = [
        sleep(defaultTimeout),
        fontsloaded(fonts, defaultTimeout),
      ]
      await Promise.allSettled(promises)

      set(() => ({
        isReady: true,
      }))
    },
  }))
)
