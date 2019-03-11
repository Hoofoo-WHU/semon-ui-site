import * as React from 'react'
import Link from '../components/Link'
import Page from '../components/Page'
import { Button } from '@semon/semon-ui'

const IndexPage: React.FunctionComponent = () => {
  return (
    <Page title='主页'>
      <div className='wrapper'>
        <h1>Hello, Semon UI 👋</h1>
        <Link href='/about'><Button type='primary' shape='round' size='large'>开始使用</Button></Link>
        <style jsx>{`
          .wrapper{
            padding-top: 0.1px;
            background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF);
            background-size: 28px 28px;
            height: 100vh;
          }
        `}</style>
      </div>
    </Page>

  )
}

export default IndexPage;
