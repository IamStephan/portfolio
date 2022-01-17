import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import Section from '@/templates/section'
import Heading from '@/components/heading'
import Button from '@/components/clickable'
import Link from '@/components/link'
import Pages from '@/constants/pages'
import { IExtendedFrontmatter } from '@/types/content'

import ArrowIcon from '@/assets/icons/arrow-right-line.svg'
import BriefcaseIcon from '@/assets/icons/briefcase-4-line.svg'

interface Props {
  title: string
  collectionTo: string
  items: Array<IExtendedFrontmatter>
}

const _shouldExpand = (index: number) => {
  const position = index + 1
  const gridCells = 4
  const modulus = position % gridCells

  if (modulus === 2 || modulus === 3) {
    return true
  }

  return false
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
        {items.map(({ slug, showcase, title, to }, i) => (
          <Link
            className={clsx(
              'relative cursor-pointer h-48 sm:h-60 md:h-72 group lg:h-80 xl:h-96',
              {
                'lg:col-span-2': _shouldExpand(i),
              }
            )}
            to={to}
            key={slug}
          >
            <Image
              {...showcase}
              // Explicityly setting this to undefined
              width={undefined}
              height={undefined}
              layout="fill"
              placeholder="blur"
              objectFit="cover"
              className="duration-300 group-hover:scale-110"
            />

            <div
              className={clsx(
                'absolute -inset-1 flex items-end justify-between p-4 overflow-hidden duration-300 lg:p-6 bg-gradient-to-t from-dark-900 group-hover:opacity-100',
                'lg:opacity-0 group-hover:opacity-100'
              )}
            >
              <Heading
                className={clsx(
                  'duration-150 line-clamp-1',
                  'lg:-translate-x-12 lg:opacity-0 group-hover:translate-x-0 group-hover:opacity-100 '
                )}
                font="xs"
                as="h3"
              >
                {title}
              </Heading>
              <ArrowIcon
                className={clsx(
                  'w-auto h-8 duration-150',
                  'opacity-0 translate-x-12 group-hover:opacity-100 group-hover:translate-x-0'
                )}
              />
            </div>
          </Link>
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
