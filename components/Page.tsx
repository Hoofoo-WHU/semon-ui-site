import React from 'react'
import Head from 'next/head'

class Page extends React.Component<{ title: string }>{
  render() {
    const { children, title } = this.props
    return (
      <div>
        <Head>
          <title>{title}</title>
        </Head>
        {children}
      </div>
    )
  }
}

export default Page