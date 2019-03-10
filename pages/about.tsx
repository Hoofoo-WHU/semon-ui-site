import * as React from 'react'
import Link from 'next/link'
import Page from '../components/Page'

const AboutPage: React.FunctionComponent = () => (
  <Page title='关于'>
    <h1>About</h1>
    <p>This is the about page</p>
    <p><Link href='/'><a>Go home</a></Link></p>
  </Page>
)

export default AboutPage;
