import React from 'react'
import { NextSeo } from 'next-seo'
import { NextPage } from 'next'

import Page from '@/templates/page'
import ShowcaseBanner from '@/sections/showcase_banner'
import ContentColumn from '@/sections/content_column'
import CTA from '@/sections/cta'
import Timeline from '@/components/timeline'
import PreferredStack from '@/components/preferred_stack'

import TestImage from '@/assets/images/general-banner-showcase.jpg'
import BriefcaseIcon from '@/assets/icons/briefcase-4-line.svg'

const About: NextPage = () => {
  return (
    <>
      <NextSeo title="About me" />
      <Page>
        <ShowcaseBanner
          showcase={{
            src: TestImage,
            objectPosition: 'bottom',
          }}
          title="[About me]"
        />
        <ContentColumn isPadded proseContent={false} title="Experience">
          <Timeline>
            <Timeline.Item
              title="Frontend web developer"
              subtitle="May 2021 - Current | Leverage BPO"
              isActive
              icon={<BriefcaseIcon className="w-6 h-6" />}
            >
              <p>
                My primary responsibility as a frontend web developer is
                building and maintaining high profile home contracting business'
                websites. I take the excellent work from the designers and build
                it from the ground up.{' '}
              </p>
              <p>
                Going from high fidelity wireframes to fully realized websites,
                I've introduced new concepts, philosophies and workflows to
                streamline the creation processes. With a change in perspective,
                we're able to push for more customized and personal client
                websites; Keeping its footprint to a minimum, reducing user
                experience quarrels and improving developer experiences.
              </p>
            </Timeline.Item>

            <Timeline.Item
              title="Freelance developer"
              subtitle="October 2018 - March 2021 | Freelancing"
              icon={<BriefcaseIcon className="w-6 h-6" />}
            >
              <p>
                While attending University, I started playing around with the
                idea of building a simple app from scratch to production to
                understand what the process would be like. Little did I know
                that this would be a turning point for me.
              </p>
              <p>
                Leaving the prospects of becoming a lawyer to becoming a
                developer, I started a new journey. Going to development
                agencies in Stellenbosch, asking them about their day to day
                operations, spending hours —day and night— learning, testing and
                implementing programming concepts.
              </p>

              <p>
                Finally, I found the opportunity I was looking for right in my
                hometown, going from simple static websites to creating
                applications that impacted how a business handles its
                operations.
              </p>
            </Timeline.Item>

            <Timeline.Item
              title="Sales & workshop assistant"
              subtitle="August 2018 - January 2019 | Cycleworx Langebaan"
              isLast
              icon={<BriefcaseIcon className="w-6 h-6" />}
            >
              <p>
                Seemingly unrelated to development, I was a workshop and sales
                assistant at a local bicycle workshop. During this time, I dealt
                with customers directly, worked independently, and occasionally
                managed the shop on my own.
              </p>

              <p>
                In turn, I learnt the intricacies of dealing with customers,
                solving novel problems in real-time and methodically working on
                a tight schedule. Building on what I believe has pushed me to be
                a better developer.
              </p>
            </Timeline.Item>
          </Timeline>
        </ContentColumn>
        <ContentColumn title="Stack expertise">
          <h3 id="stack-expertise" className="scroll-m-16">
            Strong opinions loosely held
          </h3>
          <p>
            You are a developer and have been tasked with creating the next big
            unicorn product. You have a list of features, clear user stories,
            and a timeline all set. <strong>How do you do it?</strong> Assuming
            you've got architectural best practices nailed down,{' '}
            <strong>what would the best tools for the job be?</strong>
          </p>

          <p>
            The simple answer? The ones you're most comfortable in. That being
            said, it might not always be the correct answer. You can use react
            for websites, mobile apps and desktop apps, but it's not always the
            right choice. Be open to change but stick to your guns when it makes
            sense.
          </p>

          <blockquote>
            <strong>Choose your battles wisely.</strong>
          </blockquote>

          <h3>Weapons of choice?</h3>
          <p>
            I'm at my most efficient state when I have full access to the tools
            I use and love today.
          </p>
          <PreferredStack />
          <p>
            This, however, doesn't blindside me to the fact that there are so
            many other excellent libraries and frameworks around. I like to get
            my hands dirty and experiment with them. Once I have enough
            experience in some of them, I'll add them to the list.
          </p>
        </ContentColumn>
        <CTA />
      </Page>
    </>
  )
}

//* Done
export default About
