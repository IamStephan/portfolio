import type { GetStaticProps, NextPage } from 'next'

import Page from '@/templates/page'
import GetFeatured from '@/api/case_studies/get_featured'
import Hero from '@/sections/hero'
import SkillSet from '@/sections/skill_set'
import ListGrid from '@/sections/list_grid'
import ColumnContent from '@/sections/content_column'
import CTA from '@/sections/cta'
import Button from '@/components/clickable'
import PreferredStack from '@/components/preferred_stack'
import Pages from '@/constants/pages'

import ArrowIcon from '@/assets/icons/arrow-right-line.svg'
import StackIcon from '@/assets/icons/stack-line.svg'

import { IExtendedFrontmatter } from '@/types/content'

interface Props {
  featuredItems: Array<IExtendedFrontmatter>
}

const Home: NextPage<Props> = ({ featuredItems }) => {
  return (
    <Page>
      <Hero />
      <SkillSet
        action={
          <Button
            leftIcon={<ArrowIcon />}
            rightIcon={<StackIcon />}
            to={`${Pages.about}#stack-expertise`}
            type="secondary"
          >
            View stack expertise
          </Button>
        }
        title="Using the right tools for the job."
      />

      <ListGrid
        title="Selected work"
        items={featuredItems}
        collectionTo={Pages.cases()}
      />

      <ColumnContent title="Quick intro pitch, go!">
        <h3>I like to solve problems</h3>
        <p>
          Driven by a curious mindset, I've built and deployed projects of all
          sizes for the past few years—tinkering and tweaking with code until I
          have the best solution.
        </p>

        <p>
          Currently, I'm a Frontend web developer for Leverage BPO, where I
          materialize the work of skilled and professional designers into
          results-driven websites. I keep myself well-versed in modern
          development practices, all the while enjoying what I do.
        </p>
        <h3>When I'm not on the job</h3>
        <p>
          I enjoy going on outdoor adventures with my bicycle, falling while
          learning new skateboard tricks at the local park, having a good laugh,
          and entertaining my fascination with UX/UI. I like to take an
          enthusiastic approach to development and experiment with different
          approaches to see what works best.
        </p>
        <h3>Specializing in:</h3>
        <PreferredStack />
      </ColumnContent>

      <CTA />
    </Page>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const featuredItems = (await GetFeatured(4)).map((item) => ({
    ...item,
    to: Pages.case(item.slug),
  }))

  return {
    props: {
      featuredItems,
    },
  }
}

//* Done
export default Home
