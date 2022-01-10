const Pages = {
  home: '/',
  about: '/about',
  contact: '/contact',
  case: (slug: string) => `/case-studies/${slug}`,
  cases: (page?: string) => `/case-studies${page ? `/page/${page}` : ''}`,
}

export default Pages
