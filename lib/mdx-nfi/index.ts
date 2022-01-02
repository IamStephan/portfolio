import path from 'path'
import { IConfig, handleNextMDXImages } from '@/lib/mdx-next-image-props'
import { deepMap } from '@/lib/shared-utils'

const SUPPORTED_IMAGES_EXT = /[\/.](gif|jpg|jpeg|tiff|png)$/i

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
    if (typeof value === 'string' && SUPPORTED_IMAGES_EXT.test(value)) {
      let imageNode = await handleNextMDXImages(
        filepath,
        path.basename(value),
        config
      )

      return imageNode
    }

    return value
  })

  return newfrontmatter
}
