import * as React from 'react'
import Link from 'next/link'
import Page from '../components/Page'

const IndexPage: React.FunctionComponent = () => {
  return (
    <Page title='主页'>
      <h1>Hello Next.js 👋</h1>
      <p><Link href='/about'><a>About</a></Link></p>
    </Page>
  )
}

export default IndexPage;
