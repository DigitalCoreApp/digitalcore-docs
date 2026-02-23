import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import '../styles/globals.css'

export const metadata = {
  title: {
    default: 'DigitalCore Docs',
    template: '%s — DigitalCore Docs',
  },
  description: 'Product documentation, guides, and API reference for DigitalCore — Service Economics Intelligence.',
  openGraph: {
    title: 'DigitalCore Documentation',
    description: 'Product documentation, guides, and API reference for DigitalCore — Service Economics Intelligence.',
  },
}

const banner = (
  <Banner storageKey="design-partner-2026">
    <a href="https://www.digitalcore.app/pricing" target="_blank" rel="noopener">
      🚀 Design Partner Program — Limited spots available →
    </a>
  </Banner>
)

const navbar = (
  <Navbar
    logo={<span style={{ fontWeight: 800, fontSize: '1.1rem' }}>DigitalCore Docs</span>}
    projectLink="https://github.com/DigitalCoreApp/digitalcore-docs"
  />
)

const footer = (
  <Footer>
    <span>
      © {new Date().getFullYear()} DigitalCore.{' '}
      <a href="https://www.digitalcore.app" target="_blank" rel="noopener">
        digitalcore.app
      </a>
    </span>
  </Footer>
)

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/docs/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/DigitalCoreApp/digitalcore-docs/tree/main/content"
          footer={footer}
          editLink="Edit this page on GitHub →"
          feedback={{ content: 'Question? Give us feedback →', labels: 'feedback' }}
          sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
          toc={{ float: true, title: 'On This Page' }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
