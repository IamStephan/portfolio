import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { NextSeo } from 'next-seo'

import Page from '@/templates/page'
import ContentOverview from '@/sections/content_overview'
import ShowcaseBanner from '@/sections/showcase_banner'
import MDXContent from '@/sections/mdx_content'
import CTA from '@/sections/cta'
import GetSlugs from '@/api/case_studies/get_slugs'
import GetBySlug from '@/api/case_studies/get_by_slug'

import { IContentFrontmatter } from '@/types/content'

interface Props {
  frontmatter: IContentFrontmatter
  source: MDXRemoteSerializeResult
}

const CaseStudyPage: NextPage<Props> = ({ frontmatter, source }) => {
  return (
    <>
      <NextSeo
        title={`${frontmatter.title} | Case Study`}
        description={frontmatter.overview}
      />
      <Page>
        <ShowcaseBanner
          title={`[${frontmatter.title}]`}
          showcase={{
            alt: `${frontmatter.title} screenshots.`,
            ...frontmatter.showcase,
          }}
        />
        <ContentOverview
          overview={frontmatter.overview}
          role={frontmatter.role}
          stack={frontmatter.stack}
          liveLink={frontmatter.links?.liveLink}
          repo={frontmatter.links?.repo}
        />
        <MDXContent {...source} />
        <CTA />
      </Page>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { params } = context

  if (!params?.slug || typeof params.slug !== 'string') {
    return {
      notFound: true,
    }
  }

  const data = await GetBySlug(params.slug)

  return {
    props: {
      ...data,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await GetSlugs()
  const paths = slugs.map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

//* Done
export default CaseStudyPage
