import React from 'react'
import Head from 'next/head'

class Page extends React.Component<{ title: string }>{
  componentWillMount() {

  }
  render() {
    const { children, title } = this.props
    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
        </Head>
        {children}
      </React.Fragment>
    )
  }
}

export default Page