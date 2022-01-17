import sharp from 'sharp'

const BLUR_IMG_SIZE = 8
const BLUR_QUALITY = 70
const IMAGES_EXT = /[\/.](avif|webp|jpg|jpeg|png)$/

/**
 * Next js requires that the following properties be
 * provided if the file doesn't come from a js import
 *
 *  - width
 *  - height
 *  - src (if local; reference to the public folder location)
 *  - blurData (Given as a base64 encoded string)
 */
interface INextImage {
  width: number
  height: number
  blurData: string
}

// Insparation: https://github.com/vercel/next.js/blob/canary/packages/next/server/image-optimizer.ts#L665-L714
/**
 *
 * @param content Buffer of the image
 * @param dimension The dimension that is the biggest
 * @param size The maximum size of the image
 * @param extension The image extenstion
 * @param quality The quality the image needs to be
 * @returns
 */
const resizeImage = async (
  content: Buffer,
  dimension: 'width' | 'height',
  size: number,
  extension: 'avif' | 'webp' | 'png' | 'jpeg',
  quality: number
): Promise<Buffer> => {
  const transformer = sharp(content)

  if (extension === 'avif') {
    transformer.avif({ quality })
  } else if (extension === 'webp') {
    transformer.webp({ quality })
  } else if (extension === 'png') {
    transformer.png({ quality })
  } else if (extension === 'jpeg') {
    transformer.jpeg({ quality })
  }
  if (dimension === 'width') {
    transformer.resize(size)
  } else {
    transformer.resize(null, size)
  }

  return await transformer.toBuffer()
}

/**
 *
 * @param content Buffer of the image
 * @returns
 */
const getImageSize = async (content: Buffer) => {
  const transformer = sharp(content)
  const { height, width } = await transformer.metadata()

  return {
    height,
    width,
  }
}

/**
 *
 * @param imageBuffer Buffer of the image
 * @param filename The name of the file
 * @returns
 */
const createNextImage = async (
  imageBuffer: Buffer,
  filename: string
): Promise<INextImage> => {
  const sizes = await getImageSize(imageBuffer)
  const imageBlurExt = filename.match(IMAGES_EXT)

  if (!imageBlurExt || !sizes.width || !sizes.height)
    throw new Error('Images are faulty, fix them')

  const dimension = sizes.width >= sizes.height ? 'width' : 'height'
  const extension = imageBlurExt[1].replace('jpg', 'jpeg') as 'jpeg'

  const thumbnail = await resizeImage(
    imageBuffer,
    dimension,
    BLUR_IMG_SIZE,
    extension,
    BLUR_QUALITY
  )

  const blurData = `data:image/${extension};base64,${thumbnail.toString(
    'base64'
  )}`

  return {
    blurData,
    width: sizes.width,
    height: sizes.height,
  }
}

export default createNextImage
