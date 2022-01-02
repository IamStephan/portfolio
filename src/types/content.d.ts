import { INextMDXImage } from '@/lib/shared-utils/handleNextMDXImages'

export interface IContentFrontmatter {
  title: string
  showcase: INextMDXImage
  overview: string
  role: string
  stack: Array<string>
  links?: {
    repo?: string
    liveLink?: string
  }
  date: string
  isFeatured?: boolean
}
