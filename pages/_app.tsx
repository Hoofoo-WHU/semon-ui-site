import '../components/ProgressBar'
import React from 'react'
import App, { Container } from 'next/app'
import Navigator from '../components/Navigator'
import { NextContext, NextComponentType } from 'next'
import { SingletonRouter } from 'next/router'
import Route, { Switch } from '../components/Route'
import '@semon/semon-ui/dist/index.css'
import '../style/index.css'

export interface SemonAppProps {
  Component: NextComponentType
  ctx: NextContext
  router: SingletonRouter
}

class SemonApp extends App<SemonAppProps> {
  static async getInitialProps({ Component, ctx }: SemonAppProps) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Switch>
          <Route href='/_error'>
            <Component {...pageProps} />
          </Route>
          <Route>
            <Navigator>
              <Component {...pageProps} />
            </Navigator>
          </Route>
        </Switch>
      </Container>
    )
  }
}

export default SemonApp