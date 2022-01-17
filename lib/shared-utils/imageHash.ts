/**
 * Reference: https://github.com/pwlmaciejewski/imghash
 */

import { imageFromBuffer, getImageData } from '@canvas/image'
import { bmvbhash } from 'blockhash-core'

/**
 *
 * @param imageBuffer
 * @param filename
 * @param extension
 * @returns
 */
export const imageHash = async (
  imageBuffer: Buffer,
  filename: string,
  extension: string
) => {
  let imageData: ImageData

  try {
    const image = await imageFromBuffer(imageBuffer)
    imageData = getImageData(image) as ImageData
  } catch (e) {
    if (extension === 'jpeg' || extension === 'jpg') {
      throw new Error('Jpeg error')
    } else {
      throw new Error(`${e}`)
    }
  }

  return `${filename}-${bmvbhash(imageData, 8)}.${extension}`
}
