import { ROOT_DIR, CONTENT_DIR_PREFIX } from '@/constants/path'

export const mdxImagesConfig = (slug: string) => ({
  outDir: `${ROOT_DIR}/public/${CONTENT_DIR_PREFIX}/${slug}`,
  publicPath: `/${CONTENT_DIR_PREFIX}/${slug}`,
})
