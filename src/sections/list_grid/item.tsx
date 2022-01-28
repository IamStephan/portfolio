import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import Link from '@/components/link'
import Heading from '@/components/heading'

import ArrowIcon from '@/assets/icons/arrow-right-line.svg'
import { IExtendedFrontmatter } from '@/types/content'

const _shouldExpand = (index: number) => {
  const position = index + 1
  const gridCells = 4
  const modulus = position % gridCells

  if (modulus === 2 || modulus === 3) {
    return true
  }

  return false
}

export type Props = IExtendedFrontmatter & { index: number }

const Item: React.FC<Props> = ({ slug, to, showcase, title, index }) => {
  return (
    <Link
      className={clsx(
        'relative cursor-pointer h-48 sm:h-60 md:h-72 group lg:h-80 xl:h-96',
        {
          'lg:col-span-2': _shouldExpand(index),
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
  )
}

export default Item
