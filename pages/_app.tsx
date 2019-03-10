import React from 'react'
import App, { Container } from 'next/app'
import Navigator from '../components/Navigator'
import { NextContext, NextComponentType } from 'next'
import '@semon/semon-ui/dist/index.css'

export interface SemonAppProps {
  Component: NextComponentType
  ctx: NextContext
}

class SemonApp extends App<SemonAppProps> {
  // static async getInitialProps({ Component, ctx }: SemonAppProps) {
  //   let pageProps = {}
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  //   }
  //   return { pageProps }
  // }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Navigator>
          <Component {...pageProps} />
        </Navigator>
      </Container>
    )
  }
}

export default SemonApp