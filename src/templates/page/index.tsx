import React, { forwardRef } from 'react'

import Header from '@/sections/header'
import Footer from '@/sections/footer'

interface Props {}

const PageTemplate = forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  return (
    <div
      ref={ref}
      className="min-h-screen bg-named-primary-1 grainy-screen grainy-animate bg-grainy-[1] text-gray-50"
    >
      <Header />

      <main className="prevent-collapse">{children}</main>

      <Footer />
    </div>
  )
})

export default PageTemplate
