import { INextMDXImage } from '@/lib/mdx-next-image-props'

export interface IContentFrontmatter {
  slug: string
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

export interface IExtendedFrontmatter extends IContentFrontmatter {
  to: string
}
