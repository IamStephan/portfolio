import fs from 'fs/promises'
import fg from 'fast-glob'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

import { mdxNextFrontmatterImages } from '@/lib/mdx-nfi'
import { mdxNextContentImages } from '@/lib/mdx-nci'
import { ROOT_DIR, CONTENT_DIR_PREFIX } from '@/constants/path'
import { IContentFrontmatter } from '@/types/content'

const Config = (slug: string) => ({
  outDir: `${ROOT_DIR}/public/${CONTENT_DIR_PREFIX}/${slug}`,
  publicPath: `/${CONTENT_DIR_PREFIX}/${slug}`,
})

/**
 * @description Get case study based on its slug
 *              Returns both content and frontmatter
 */
const GetBySlug = async (slug: string) => {
  const entries = await fg(`./content/${slug}/index.{md,mdx}`)
  const entry = entries[0]
  const fileLocation = path.resolve(ROOT_DIR, entry)
  const contents = await fs.readFile(fileLocation, 'utf8')
  const { data, content } = matter(contents)

  const _content = await mdxNextContentImages(
    path.resolve(ROOT_DIR, entry),
    content,
    Config(slug)
  )

  const _frontmatter = await mdxNextFrontmatterImages(
    path.resolve(ROOT_DIR, entry),
    data,
    Config(slug)
  )

  const source = await serialize(_content, {})

  return {
    frontmatter: _frontmatter as IContentFrontmatter,
    source,
  }
}

export default GetBySlug
