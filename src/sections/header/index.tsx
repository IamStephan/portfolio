import React from 'react'

import Section from '@/templates/section'
import Button from '@/components/clickable'
import Link from '@/components/link'
import Logo from '@/components/p_logo'
import MenuButton from '@/components/menu_button'
import { useLogoStore } from '@/stores/logo'
import Pages from '@/constants/pages'
import ResumeUrl from '@/constants/resume'

import ResumeIcon from '@/assets/icons/profile-line.svg'
import DownloadIcon from '@/assets/icons/download-2-line.svg'

interface QuickActionProps {
  title: string
  text: string
  to: string
}

const QuickAction: React.FC<QuickActionProps> = ({ title, text, to }) => {
  return (
    <Link to={to} className="inline-flex flex-col">
      <div className="text-xs text-gray-50/90">{text}</div>
      <div className="text-sm italic font-extrabold tracking-widest uppercase font-heading">
        {title}
      </div>
    </Link>
  )
}

export interface Props {}

const Header: React.FC<Props> = () => {
  const { logoPos } = useLogoStore()

  return (
    <Section
      as="header"
      sectionGap="none"
      isPadded
      className="z-10 flex items-center justify-between py-12 space-x-6 md:space-x-10 lg:space-x-28"
    >
      {/* Logo */}
      <div className="flex justify-start">
        <Link to={Pages.home} aria-label="Go back home" className="block">
          {logoPos === 'in-header' && (
            <Logo type="mini" className="z-30 h-16" />
          )}
        </Link>
      </div>

      {/* Quick Actions */}
      <nav className="justify-end flex-1 hidden space-x-12 sm:flex">
        <QuickAction
          text="Check out my"
          title="Case Studies"
          to={Pages.cases()}
        />
        <QuickAction text="learn more" title="About me" to={Pages.about} />
        <QuickAction text="Let's get" title="In Touch" to={Pages.contact} />
      </nav>

      {/* CTA Button */}
      <div className="hidden md:block">
        <Button
          href={ResumeUrl}
          rightIcon={<ResumeIcon />}
          leftIcon={<DownloadIcon />}
          as="externalLink"
        >
          Resumé
        </Button>
      </div>

      {/* Menu Button */}
      <div className="flex justify-end flex-1 sm:hidden">
        <MenuButton />
      </div>
    </Section>
  )
}

//* Done
export default Header
