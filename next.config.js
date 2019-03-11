const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')

module.exports = withTypescript(withCSS({
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
