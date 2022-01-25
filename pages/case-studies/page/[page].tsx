import React from 'react'
import { NextSeo } from 'next-seo'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'

import Page from '@/templates/page'
import ShowcaseBanner from '@/sections/showcase_banner'
import ListRows from '@/sections/list_rows'
import ListPagination from '@/sections/list_pagination'
import CTA from '@/sections/cta'
import GetPages from '@/api/case_studies/get_pages'
import GetByPage from '@/api/case_studies/get_by_page'
import { IExtendedFrontmatter } from '@/types/content'

import ShowcaseImg from '@/assets/images/general-banner-showcase.jpg'
import Pages from '@/constants/pages'

interface Props {
  pages: number
  activePage: number
  items: Array<IExtendedFrontmatter>
}

const Showcase = {
  alt: 'Picture of different project showcases',
  ...ShowcaseImg,
}

const ItemsPerPage = 4
const _getPageLink = (page: number) => Pages.cases(`${page}`)

const CaseStudyPage: NextPage<Props> = ({ pages, activePage, items }) => {
  return (
    <>
      <NextSeo title={`Page ${activePage} of ${pages} | Case Studies`} />
      <Page>
        <ShowcaseBanner
          title="[Selected Studies]"
          showcase={Showcase}
          subtitle={`Page ${activePage} of ${pages}`}
        />
        <ListRows items={items} />
        <ListPagination
          pages={pages}
          activePage={activePage}
          getTo={_getPageLink}
        />
        <CTA />
      </Page>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await GetPages(ItemsPerPage)

  const paths = Array.from({ length: pages }).map((_, i) => ({
    params: { page: `${i + 1}` },
  }))

  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { params } = context

  const page = params?.page ?? '1'
  const items = (await GetByPage(ItemsPerPage, Number(page))).map((item) => ({
    ...item,
    to: Pages.case(item.slug),
  }))
  const pages = await GetPages(ItemsPerPage)

  return {
    props: {
      items,
      activePage: Number(page),
      pages,
    },
  }
}

//* Done
export default CaseStudyPage
