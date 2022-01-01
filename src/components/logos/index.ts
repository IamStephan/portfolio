import React from 'react'
import dynamic from 'next/dynamic'

type TLogoElement = React.HTMLProps<HTMLOrSVGElement>

export const Logos = {
  css: {
    alias: 'CSS 3',
    element: dynamic<TLogoElement>(() => import('@/assets/logos/css3.svg')),
  },
  scss: {
    alias: 'SCSS',
    element: dynamic<TLogoElement>(() => import('@/assets/logos/sass.svg')),
  },
  tailwind: {
    alias: 'Tailwind CSS',
    element: dynamic<TLogoElement>(
      () => import('@/assets/logos/tailwindcss.svg')
    ),
  },
  javascript: {
    alias: 'Javascript',
    element: dynamic<TLogoElement>(
      () => import('@/assets/logos/javascript.svg')
    ),
  },
  typescript: {
    alias: 'Typescript',
    element: dynamic<TLogoElement>(
      () => import('@/assets/logos/typescript.svg')
    ),
  },
  react: {
    alias: 'React',
    element: dynamic<TLogoElement>(() => import('@/assets/logos/react.svg')),
  },
  nextjs: {
    alias: 'Next.JS',
    element: dynamic<TLogoElement>(
      () => import('@/assets/logos/nextdotjs.svg')
    ),
  },
  gatsby: {
    alias: 'Gatsby',
    element: dynamic<TLogoElement>(() => import('@/assets/logos/gatsby.svg')),
  },
  html: {
    alias: 'HTML 5',
    element: dynamic<TLogoElement>(() => import('@/assets/logos/html5.svg')),
  },
  reactnative: {
    alias: 'React Native',
    element: dynamic<TLogoElement>(() => import('@/assets/logos/react.svg')),
  },
  expo: {
    alias: 'Expo',
    element: dynamic<TLogoElement>(() => import('@/assets/logos/expo.svg')),
  },
  strapi: {
    alias: 'Strapi',
    element: dynamic<TLogoElement>(() => import('@/assets/logos/strapi.svg')),
  },
  firebase: {
    alias: 'Firebase',
    element: dynamic<TLogoElement>(() => import('@/assets/logos/firebase.svg')),
  },
  php: {
    alias: 'PHP',
    element: dynamic<TLogoElement>(() => import('@/assets/logos/php.svg')),
  },
  git: {
    alias: 'Git',
    element: dynamic<TLogoElement>(() => import('@/assets/logos/git.svg')),
  },
  github: {
    alias: 'Github',
    element: dynamic<TLogoElement>(() => import('@/assets/logos/github.svg')),
  },
}
