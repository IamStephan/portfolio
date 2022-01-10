import React from 'react'
import clsx from 'clsx'

import Section, { SectionGapMap } from '@/templates/section'
import RowItemAlt, { Props as RowItemProps } from '@/components/row_item'

interface Props {
  items: Array<RowItemProps>
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
            <RowItemAlt {...item} />
          </li>
        ))}
      </ul>
    </Section>
  )
}

//* Done
export default ListRows
