import React from 'react'

import LogoChip from '@/components/logo_chip'

const PreferredStack: React.FC = () => {
  return (
    <div className="flex flex-wrap -mt-1 -ml-1">
      <LogoChip logo="javascript" className="m-1" />
      <LogoChip logo="typescript" className="m-1" />
      <LogoChip logo="scss" className="m-1" />
      <LogoChip logo="tailwind" className="m-1" />
      <LogoChip logo="react" className="m-1" />
      <LogoChip logo="nextjs" className="m-1" />
      <LogoChip logo="reactnative" className="m-1" />
      <LogoChip logo="git" className="m-1" />
      <LogoChip logo="github" className="m-1" />
    </div>
  )
}

export default PreferredStack
