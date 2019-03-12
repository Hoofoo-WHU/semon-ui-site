const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const prod = process.env.NODE_ENV === 'production'
const BASE_URL = prod ? '/semon-ui-site' : ''

module.exports = withTypescript(withCSS(withSass({
  assetPrefix: BASE_URL,
  publicRuntimeConfig: {
    BASE_URL
  },
  exportPathMap: function () {
    return {
      '/404.html': { page: '/_error' },
      '/': { page: '/' },
      '/doc/introduce': { page: '/doc', query: { title: 'introduce' } },
      '/doc/getting-started': { page: '/doc', query: { title: 'getting-started' } },
      '/doc/button': { page: '/doc', query: { title: 'button' } }
    }
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: 'raw-loader'
    })
    return config
  }
})))
