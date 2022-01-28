import path from 'path'
import { IConfig, handleNextMDXImages } from '@/lib/mdx-next-image-props'
import { deepMap } from '@/lib/shared-utils'
import { hasToken, parseToken } from '@/lib/token-parser'

/**
 * @description This takes the frontmatter of the content (object form)
 *              and deep maps it to find string values that are image
 *              locations. Then convert the string to a object that next
 *              can use as props
 * @param filepath
 * @param frontmatter
 * @param config
 * @returns
 */
export const mdxNextFrontmatterImages = async (
  filepath: string,
  frontmatter: { [key: string]: any },
  config: IConfig
) => {
  const frontMatterClone = JSON.parse(JSON.stringify(frontmatter))

  const newfrontmatter = await deepMap(frontMatterClone, async (value) => {
    if (typeof value === 'string' && hasToken('image', value)) {
      const [pathToImg, alt] = parseToken('image', value)

      let imageNode = await handleNextMDXImages(
        filepath,
        path.basename(pathToImg),
        config
      )

      imageNode.alt = alt

      return imageNode
    }

    return value
  })

  return newfrontmatter
}
