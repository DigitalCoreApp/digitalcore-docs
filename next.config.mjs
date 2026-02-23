import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
  readingTime: true,
})

export default withNextra({
  basePath: '/docs',
  output: 'standalone',
  images: {
    unoptimized: true,
  },
})
