import path from 'path'
import replace from 'string-replace-async'
import { IConfig, handleNextMDXImages } from '@/lib/mdx-next-image-props'

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
  const _content = await replace(
    content,
    /(image)\([^\)]*\)(\.[^\)]*\))?/g,
    async (match) => {
      const value = match.match(/("|')((?:\\\1|(?:(?!\1).))*)\1/g) || []

      // This is assuming that the params cannot contain ' and "
      let args = value.map((arg) => arg.trim().replaceAll(/\"|\'/g, ''))

      const imagePath = args[0]
      const imageAlt = args[1]

      const imageNode = await handleNextMDXImages(
        filepath,
        path.basename(imagePath),
        config
      )

      imageNode.alt = imageAlt

      return JSON.stringify(imageNode)
    }
  )

  return _content
}
