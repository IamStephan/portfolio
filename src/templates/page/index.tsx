import React, { forwardRef } from 'react'

import Header, { Props as HeaderProps } from '@/sections/header'
import Footer, { Props as FooterProps } from '@/sections/footer'

interface Props {
  headerProps?: HeaderProps
  footerProps?: FooterProps
}

const PageTemplate = forwardRef<HTMLDivElement, React.PropsWithChildren<Props>>(
  ({ headerProps = {}, footerProps = {}, children }, ref) => {
    return (
      <div
        ref={ref}
        className="min-h-screen bg-dark-900 grainy-screen grainy-animate bg-grainy-[1] text-gray-50"
      >
        <Header {...headerProps} />
        <main className="prevent-collapse">{children}</main>
        <Footer {...footerProps} />
      </div>
    )
  }
)

export default PageTemplate
