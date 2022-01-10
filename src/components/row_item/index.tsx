import React from 'react'
import Image from 'next/image'
import Link from '@/components/link'

import Heading from '@/components/heading'
import LogoChip from '@/components/logo_chip'

import ArrowIcon from '@/assets/icons/arrow-right-line.svg'
import { IExtendedFrontmatter } from '@/types/content'

export interface Props extends IExtendedFrontmatter {}

const RowItem: React.FC<Props> = ({ title, overview, showcase, stack, to }) => {
  const { width, height, ..._showcase } = showcase
  return (
    <Link
      to={to}
      className="relative grid py-4 overflow-hidden duration-150 cursor-pointer md:py-8 lg:py-12 lg:grid-cols-12 lg:gap-12 group hover:bg-dark-500/20 active:hover:bg-dark-500/40"
    >
      <div className="relative mb-4 md:mb-8 h-44 xs:h-64 md:h-96 lg:col-span-5 lg:min-h-full">
        <Image
          {..._showcase}
          placeholder="blur"
          objectFit="cover"
          layout="fill"
          className="duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col duration-300 lg:col-span-6 lg:justify-center group-hover:scale-95">
        <Heading as="h2" font="sm" className="mb-3 sm:mb-5 md:mb-7">
          {title}
        </Heading>
        <p className="mb-4 text-sm text-gray-200 sm:mb-6 md:mb-8 line-clamp-3 md:text-base">
          {overview}
        </p>
        <ul className="flex flex-wrap -mt-1 -ml-1">
          {stack.map((item) => (
            <li key={item} className="m-1">
              <LogoChip logo={item as any} />
            </li>
          ))}
        </ul>
      </div>
      <div className="items-center justify-end hidden lg:flex lg:col-span-1">
        <ArrowIcon className="w-auto h-12 duration-300 group-hover:-translate-x-1/2" />
      </div>
    </Link>
  )
}

//* Done
export default RowItem
