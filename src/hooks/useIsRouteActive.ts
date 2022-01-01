import { useRouter } from 'next/router'
import { matchURL } from '@/utils/match_url'

const useIsRouteActive = (path: string | Array<string>) => {
  const { asPath } = useRouter()

  return matchURL(path, asPath)
}

// TODO: Implement ability to check multiple with one hook instance
export default useIsRouteActive
