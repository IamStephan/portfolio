import React from 'react'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { NextPage } from 'next'

import Page from '@/templates/page'
import ContactForm from '@/sections/contact_form'
import EmptyState from '@/sections/empty_state'
import CTA from '@/sections/cta'
import Button from '@/components/clickable'
import Pages from '@/constants/pages'

import LeftArrowIcon from '@/assets/icons/arrow-left-line.svg'
import ChatIcon from '@/assets/icons/chat-smile-line.svg'

const Contact: NextPage = () => {
  const { query } = useRouter()
  const isFormSuccess = query.success

  return (
    <>
      <NextSeo title={isFormSuccess ? 'Thank you!' : "Let's get talking!"} />
      <Page>
        {isFormSuccess ? (
          <EmptyState
            title="Thank you!"
            message="asdasdasdasd"
            action={
              <Button
                to={Pages.contact}
                leftIcon={<LeftArrowIcon />}
                rightIcon={<ChatIcon />}
              >
                Send another message
              </Button>
            }
          />
        ) : (
          <ContactForm />
        )}
        <CTA />
      </Page>
    </>
  )
}

//* Done
export default Contact
