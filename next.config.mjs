import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  readingTime: true,
})

export default withNextra({
  basePath: '/docs',
  output: 'standalone',
  images: {
    unoptimized: true, // Simpler for docs site
  },
})
