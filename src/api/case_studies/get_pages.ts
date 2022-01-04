import { getCaseEntries } from '@/utils/get_case_entries'

/**
 * @description Get total number of pages based on the
 *              total number of case studies per page
 */
const GetPages = async (itemsPerPage: number) => {
  const entries = await getCaseEntries()
  return Math.ceil(entries.length / itemsPerPage)
}

export default GetPages
