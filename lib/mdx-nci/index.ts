import path from 'path'
import { IConfig, handleNextMDXImages } from '@/lib/mdx-next-image-props'
import { replaceAllTokens } from '@/lib/token-parser'

/**
 * @description This takes the content as a string and looks for token matches
 *              Currently it's looking for the token `image("[path_to_image]")`
 *              Another search is done inside the match tokens for the string param
 *              and uses that to convert the tokens into object props for next images
 *              to use
 * @param filepath
 * @param content
 * @param config
 * @returns
 */
export const mdxNextContentImages = async (
  filepath: string,
  content: string,
  config: IConfig
) => {
  return await replaceAllTokens('image', content, async (args) => {
    const imagePath = args[0]
    const imageAlt = args[1]

    const imageNode = await handleNextMDXImages(
      filepath,
      path.basename(imagePath),
      config
    )

    imageNode.alt = imageAlt

    return JSON.stringify(imageNode)
  })
}
