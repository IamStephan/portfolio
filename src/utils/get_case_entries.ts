import fg from 'fast-glob'

export const getCaseEntries = async () => {
  return await fg('./content/**/index.{md,mdx}', {
    // ignore: ['./content/_template/**/*'],
  })
}
