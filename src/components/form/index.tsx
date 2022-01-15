import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Input from '@/components/input'
import Button from '@/components/clickable'
import Pages from '@/constants/pages'
import { encodeFormData } from '@/utils/encode_form_data'

import EmailIcon from '@/assets/icons/mail-line.svg'
import SendEmailIcon from '@/assets/icons/mail-send-line.svg'

interface IFormData {
  name: string
  email: string
  subject: string
  message: string
}

const formSchema = yup.object({
  name: yup.string().required('Name is a required field'),
  email: yup
    .string()
    .email('Email is not a valid email')
    .required('Email is a required field'),
  subject: yup.string().required('Subject is a required field'),
  message: yup.string().required('Message is a required field'),
})

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(formSchema),
  })
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const _handleSubmit = async (data: IFormData) => {
    setIsLoading(true)

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeFormData({
        'form-name': 'contact-me',
        ...data,
      }),
    })

    setIsLoading(false)
    router.push({
      pathname: Pages.contact,
      query: {
        success: true,
      },
    })
  }

  return (
    <form
      className="grid gap-6"
      method="POST"
      name="contact-me"
      action={`${Pages.contact}/success=true`}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit(_handleSubmit)}
    >
      <input type="hidden" name="form-name" value="contact-me" />
      <Input
        placeholder="Name *"
        error={errors.name?.message}
        {...register('name')}
      />
      <Input
        placeholder="Email *"
        error={errors.email?.message}
        {...register('email')}
      />
      <Input
        placeholder="Subject *"
        containerClassName="sm:col-span-2"
        error={errors.subject?.message}
        {...register('subject')}
      />
      <Input
        as="area"
        rows={5}
        placeholder="Message *"
        containerClassName="sm:col-span-2"
        error={errors.message?.message}
        {...register('message')}
      />
      <Button
        rightIcon={<EmailIcon />}
        leftIcon={<SendEmailIcon />}
        as="button"
        nativeType="submit"
        className="col-start-1 place-self-start"
        isLoading={isLoading}
      >
        Send Message
      </Button>
    </form>
  )
}

export default Form
