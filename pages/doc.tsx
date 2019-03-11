import * as React from 'react'
import Page from '../components/Page'
import { NextContext } from 'next'
import Post from '../components/Post'
// import Router from 'next/router'

class DocPage extends React.Component<{ title: string, content: string }> {
  static getInitialProps = async function ({ query }: NextContext<{ title: string }>) {
    let content: any
    try {
      content = await import(`../markdowns/${query.title}.md`)
      content = content.default
    } catch{
      // Router.replace('')
      console.log('加载失败')
    }
    return { title: query.title, content }
  }
  render() {
    const { title, content } = this.props
    return (<Page title={title}>
      <Post>{content}</Post>
    </Page>
    )
  }
}

export default DocPage
