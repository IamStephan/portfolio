import React from 'react'
import clsx from 'clsx'

import Section from '@/templates/section'
import Link from '@/components/link'

interface Props {
  pages: number
  activePage: number
  getTo: (page: number) => string
}

const ListPagination: React.FC<Props> = ({ pages, activePage, getTo }) => {
  return (
    <Section isPadded widthClamp="md">
      <nav>
        <ul className="flex justify-center">
          {Array.from({ length: pages }).map((_, page) => (
            <li key={page}>
              <Link
                className={clsx(
                  'px-6 py-3 font-bold border-t border-b border-gray-600 cursor-pointer hover:bg-dark-500/20 active:bg-dark-500/40 duration-150 text-sm md:text-base lg:text-xl',
                  {
                    'bg-persian-red-main hover:!bg-persian-red-main/80 active:!bg-persian-red-main/60':
                      activePage === page + 1,
                  }
                )}
                to={getTo(page + 1)}
                aria-label={`Go to page ${page + 1}`}
              >
                {page + 1}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Section>
  )
}

//* Done
export default ListPagination
