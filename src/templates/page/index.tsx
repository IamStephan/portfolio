import React from 'react'

import Header from '@/sections/header'
import Footer from '@/sections/footer'

const PageTemplate: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen bg-named-primary-1 grainy-screen grainy-animate bg-grainy-[1] text-gray-50">
      <Header />

      <main className="prevent-collapse">{children}</main>

      <Footer />
    </div>
  )
}

export default PageTemplate
