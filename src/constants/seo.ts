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
    url: '/og-images/generic/small.jpg',
    width: 400,
    height: 400,
  },
  {
    url: '/og-images/generic/medium.jpg',
    width: 1200,
    height: 360,
  },
  {
    url: '/og-images/generic/large.jpg',
    width: 1080,
    height: 1080,
  },
  {
    url: '/og-images/generic/xlarge.jpg',
    width: 1080,
    height: 1920,
  },
]

const SeoOG = {
  images: SeoOGImages,
}

export { SeoFavicon, SeoOGImages, SeoOG }
