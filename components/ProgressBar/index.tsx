import Router from 'next/router'
import nprogress from 'nprogress'
import './progressbar.scss'
Router.events.on('routeChangeStart', () => {
  nprogress.start()
})

Router.events.on('routeChangeComplete', () => {
  nprogress.done()
})