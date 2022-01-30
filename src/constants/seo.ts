const BaseUrl =
  process.env.NODE_ENV === 'development'
    ? 'localhost:300'
    : 'https://iamstephan.dev'

const SeoFavicon = [
  {
    rel: 'icon',
    type: 'image/svg+xml',
    href: '/icons/favicon.svg',
  },
  {
    rel: 'icon',
    type: 'image/png',
    href: '/icons/favicon.png',
  },
]

const SeoOGImages = [
  {
    url: `${BaseUrl}/og-images/generic.jpg`,
    width: 1200,
    height: 360,
  },
]

const SeoOG = {
  images: SeoOGImages,
}

export { SeoFavicon, SeoOGImages, SeoOG }
