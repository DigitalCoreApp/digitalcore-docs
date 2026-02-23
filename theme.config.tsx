import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>
      DigitalCore Docs
    </span>
  ),
  project: {
    link: 'https://github.com/DigitalCoreApp/digitalcore-docs',
  },
  docsRepositoryBase: 'https://github.com/DigitalCoreApp/digitalcore-docs/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s — DigitalCore Docs',
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="DigitalCore Documentation" />
      <meta property="og:description" content="Product documentation, guides, and API reference for DigitalCore — Service Economics Intelligence." />
      <link rel="icon" href="/docs/favicon.ico" />
    </>
  ),
  navigation: {
    prev: true,
    next: true,
  },
  footer: {
    text: (
      <span>
        © {new Date().getFullYear()} DigitalCore.{' '}
        <a href="https://www.digitalcore.app" target="_blank" rel="noopener">
          digitalcore.app
        </a>
      </span>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    float: true,
    title: 'On This Page',
  },
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
  banner: {
    key: 'design-partner',
    text: (
      <a href="https://www.digitalcore.app/pricing" target="_blank" rel="noopener">
        🚀 Design Partner Program — Limited spots available →
      </a>
    ),
  },
  navbar: {
    extraContent: (
      <a
        href="https://www.digitalcore.app"
        target="_blank"
        rel="noopener"
        style={{ fontSize: '0.875rem', opacity: 0.7 }}
      >
        ← Back to digitalcore.app
      </a>
    ),
  },
  primaryHue: 239,        // indigo-600 hue
  primarySaturation: 84,   // indigo-600 saturation
}

export default config
