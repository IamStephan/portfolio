import path from 'path'
import fs from 'fs/promises'
import fsSync from 'fs'
import { objectBasedHash } from '@/lib/shared-utils'
import createNextImage from './createNextImage'

export interface IConfig {
  outDir: string
  publicPath: string
}

export interface INextMDXImage {
  width: number
  height: number
  src: string
  blurDataURL: string
}

/**
 * @description Copies the images from the src to the destination
 *              and skips it when a file with the same name exists
 * @param src Absolute path to image
 * @param dest Absolute path to destination
 */
const _yeetFrontmatterImages = async (src: string, dest: string) => {
  if (!fsSync.existsSync(dest)) {
    await fs.writeFile(dest, await fs.readFile(src))
  }
}

/**
 * @description This checks whether the directory is available and if not
 *              it recursively creates on
 * @param outDir Directory where the images are moved to
 */
const _outDirSafety = async (outDir: string) => {
  if (!fsSync.existsSync(outDir)) {
    await fs.mkdir(outDir, { recursive: true })
  }
}

/**
 *
 * @param rootDir The current working directory that images are relative to
 * @param filePath The path to the image relative to the rootDir
 * @param Config
 * @returns
 */
export const handleNextMDXImages = async (
  // Root dir to resolve image
  rootDir: string,
  // Path to image relative to root
  filePath: string,
  { outDir, publicPath }: IConfig
) => {
  const imagePath = path.resolve(path.dirname(rootDir), filePath)
  const imageBuffer = await fs.readFile(imagePath)
  const stats = await fs.stat(imagePath)
  const hashedName = `matter-${filePath.split('.')[0]}-${objectBasedHash(
    stats
  )}.${filePath.split('.')[1]}`
  const image = await createNextImage(imageBuffer, filePath)

  await _outDirSafety(outDir)
  await _yeetFrontmatterImages(imagePath, `${outDir}/${hashedName}`)

  return {
    width: image.width,
    height: image.height,
    src: `${publicPath}/${hashedName}`,
    blurDataURL: image.blurData,
  } as INextMDXImage
}
