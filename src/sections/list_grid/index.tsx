import React from 'react'

import Section from '@/templates/section'
import Heading from '@/components/heading'
import Button from '@/components/clickable'
import Pages from '@/constants/pages'
import Item, { Props as ItemProps } from './item'

import ArrowIcon from '@/assets/icons/arrow-right-line.svg'
import BriefcaseIcon from '@/assets/icons/briefcase-4-line.svg'

interface Props {
  title: string
  collectionTo: string
  items: Array<Omit<ItemProps, 'index'>>
}

const ListGrid: React.FC<Props> = ({ title, collectionTo, items }) => {
  return (
    <Section isPadded widthClamp="md">
      <div className="flex justify-between mb-6 lg:items-end sm:mb-8 md:mb-10 lg:mb-12">
        <Heading as="h2" font="md">
          {title}
        </Heading>

        <Button
          leftIcon={<ArrowIcon />}
          rightIcon={<BriefcaseIcon />}
          to={collectionTo}
          type="secondary"
          className="hidden md:inline-flex"
        >
          View all
        </Button>
      </div>

      <div className="grid gap-6 mb-6 sm:mb-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 md:mb-0">
        {items.map((item, i) => (
          <Item key={i} index={i} {...item} />
        ))}
      </div>

      <div className="flex justify-end md:hidden">
        <Button
          leftIcon={<ArrowIcon />}
          rightIcon={<BriefcaseIcon />}
          to={Pages.cases()}
          className="md:hidden"
        >
          View all
        </Button>
      </div>
    </Section>
  )
}

//* Done
export default ListGrid
