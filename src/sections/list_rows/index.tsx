import React from 'react'
import clsx from 'clsx'

import Section, { SectionGapMap } from '@/templates/section'
import Item, { Props as ItemProps } from './item'

interface Props {
  items: Array<ItemProps>
}

const ListRows: React.FC<Props> = ({ items }) => {
  return (
    <Section isPadded widthClamp="md">
      <ul
        className={clsx(
          'border-t border-b border-gray-600 divide-y divide-gray-600',
          SectionGapMap.bottom
        )}
      >
        {items.map((item) => (
          <li key={item.title}>
            <Item {...item} />
          </li>
        ))}
      </ul>
    </Section>
  )
}

//* Done
export default ListRows
