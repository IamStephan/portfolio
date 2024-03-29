import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

import { mdxNextFrontmatterImages } from '@/lib/mdx-nfi'
import { ROOT_DIR } from '@/constants/path'
import { IContentFrontmatter } from '@/types/content'
import { getCaseEntries, mdxImagesConfig } from '@/utils/index'

interface IExtendedFrontmatter extends IContentFrontmatter {
  fileLoc: string
}

/**
 * @description Get page case studies based on
 *              date sorting and total number
 *              of pages
 */
const GetByPage = async (itemsPerPage: number, page: number) => {
  const entries = await getCaseEntries()
  let frontmatterList: Array<IExtendedFrontmatter> = []

  // Get frontmatter
  for (const entry of entries) {
    const fileLocation = path.resolve(ROOT_DIR, entry)
    const slug = path.basename(path.dirname(fileLocation))
    const contents = await fs.readFile(fileLocation, 'utf8')
    const { data } = matter(contents)

    frontmatterList.push({
      ...(data as Omit<IContentFrontmatter, 'slug'>),
      slug: slug,
      fileLoc: fileLocation,
    })
  }

  // Sort content
  frontmatterList.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    let results: number = 0

    // By date
    results = dateB.getTime() - dateA.getTime()

    // By title
    if (results === 0) {
      return a.title.toUpperCase().localeCompare(b.title.toUpperCase())
    }

    return results
  })

  // Extract content for this page
  frontmatterList = frontmatterList.splice(
    (page - 1) * itemsPerPage,
    itemsPerPage
  )

  // Handle Frontmatter images
  const frontmatterListWithImages = await Promise.all(
    frontmatterList.map(async (item) => {
      const { fileLoc, ..._item } = item

      const frontmatter = (await mdxNextFrontmatterImages(
        fileLoc,
        _item,
        mdxImagesConfig(_item.slug)
      )) as IContentFrontmatter

      return frontmatter
    })
  )

  return frontmatterListWithImages
}

export default GetByPage
