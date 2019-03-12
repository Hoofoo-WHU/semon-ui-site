import * as React from 'react'
import Link from '../components/Link'
import Page from '../components/Page'
import { Button } from '@semon/semon-ui'
import { Posts } from '../data/PostMenu';

const IndexPage: React.FunctionComponent = () => {
  return (
    <Page title='Semon UI - 一套简单的 React 组件'>
      <div className='wrapper'>
        <h1>Hello, Semon UI 👋</h1>
        <div className='button-wrapper'>
          <Link href={`/doc?title=${Posts['getting-started'].file}`} as={`/doc/${Posts['getting-started'].file}`}><Button style={{ margin: 4, width: '7em' }} type='primary' shape='round' size='large'>开始使用</Button></Link>
          <Link href='/'><Button style={{ margin: 4, width: '7em' }} shape='round' size='large'>GitHub</Button></Link>
        </div>
        <style jsx>{`
          .wrapper{
            padding-top: 0.1px;
            background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF);
            background-size: 28px 28px;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          h1{
            font-size: 60px;
            margin-top: 120px;
          }
        `}</style>
      </div>
    </Page>

  )
}

export default IndexPage;
