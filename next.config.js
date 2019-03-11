const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const prod = process.env.NODE_ENV === 'production'
const BASE_URL = prod ? '/semon-ui-site' : ''

module.exports = withTypescript(withCSS({
  assetPrefix: BASE_URL,
  publicRuntimeConfig: {
    BASE_URL
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/doc/introduce': { page: '/doc', query: { title: 'introduce' } },
      '/doc/install': { page: '/doc', query: { title: 'install' } }
    }
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: 'raw-loader'
    })
    return config
  }
}))
