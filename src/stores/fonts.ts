import { proxy } from 'valtio'
import FontFaceObserver from 'fontfaceobserver'

interface IStore {
  isFontsLoaded: boolean
}

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

export const waitForFont = async (fonts: Array<IFontFace>, timeout: number) => {
  const promises = fonts.map(({ family, weight, style, stretch }) =>
    new FontFaceObserver(family, {
      weight,
      style,
      stretch,
    }).load(undefined, timeout)
  )

  try {
    // Resolve regardless of font loaded state
    await Promise.allSettled(promises)
  } catch (e) {
    // For unsupported browsers
    console.error(e)
  }
}

const store = proxy<IStore>({ isFontsLoaded: false })

export default store
