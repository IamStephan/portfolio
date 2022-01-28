function LinkEdits() {
  return {
    async rewrites() {
      return [
        {
          source: '/case-studies',
          destination: '/case-studies/page/1',
        },
      ]
    },
    async redirects() {
      return [
        {
          source: '/case-studies/page',
          destination: '/case-studies',
          permanent: true,
        },
      ]
    },
  }
}

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  ...LinkEdits(),
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg')
    )
    fileLoaderRule.exclude = /\.svg$/
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve('@svgr/webpack'),
    })
    return config
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}
