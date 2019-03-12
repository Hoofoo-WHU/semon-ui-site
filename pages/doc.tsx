import * as React from 'react'
import Page from '../components/Page'
import { NextContext } from 'next'
import Post from '../components/Post'
import { Posts } from '../data/PostMenu'
// import Router from 'next/router'

class DocPage extends React.Component<{ title: keyof typeof Posts, content: string }> {
  static getInitialProps = async ({ query }: NextContext<{ title: string }>) => {
    let content: any
    try {
      content = await import(`../markdowns/${query.title}.md`)
      content = content.default
    } catch{
      console.log('加载失败')
    }
    return { title: query.title, content }
  }
  // static defaultProps = {
  //   title: 'button',
  //   cotent: '123',
  //   demos: <p>123</p>
  // }
  render() {
    const { title, content } = this.props
    let demos = null
    try {
      demos = require(`../demos/${title}`).default
      console.log(demos)
    } catch{ }
    return (<Page title={`${Posts[title].subTitle ? Posts[title].subTitle + ' ' : ''}${Posts[title].title} - Semon UI`}>
      <Post>{content}</Post>
      {demos && <Post>
        <h2>代码演示</h2>
        {demos}
      </Post>
      }
    </Page>
    )
  }
}

export default DocPage
