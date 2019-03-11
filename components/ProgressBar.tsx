import Router from 'next/router'
import nprogress from 'nprogress'
import '../style/progressbar.css'
Router.events.on('routeChangeStart', () => {
  nprogress.start()
})

Router.events.on('routeChangeComplete', () => {
  nprogress.done()
})