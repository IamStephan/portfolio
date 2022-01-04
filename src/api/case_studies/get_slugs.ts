import path from 'path'
import { getCaseEntries } from '@/utils/get_case_entries'

/**
 * @description Get a list of all case studies
 *              that are available and have parseable
 *              content
 */
const GetSlugs = async () => {
  const entries = await getCaseEntries()
  const slugs = entries.map((entry) => path.basename(path.dirname(entry)))
  return slugs
}

export default GetSlugs
