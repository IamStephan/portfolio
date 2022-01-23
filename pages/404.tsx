import React from 'react'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import Page from '@/templates/page'
import EmptyState from '@/sections/empty_state'
import Button from '@/components/clickable'
import Pages from '@/constants/pages'

import HomeIcon from '@/assets/icons/home-smile-2-line.svg'
import LeftArrowIcon from '@/assets/icons/arrow-left-line.svg'

const FooterProps = {
  hasTopLine: true,
}

const NotFound: NextPage = () => {
  return (
    <>
      <NextSeo title="Page Not Found" />
      <Page footerProps={FooterProps}>
        <EmptyState
          title="Page not found."
          message="Oh no, it looks like the page you're looking for doesn't exist or has been removed."
          action={
            <Button
              to={Pages.home}
              leftIcon={<LeftArrowIcon />}
              rightIcon={<HomeIcon />}
            >
              Go Back Home
            </Button>
          }
        />
      </Page>
    </>
  )
}

//* Done
export default NotFound
