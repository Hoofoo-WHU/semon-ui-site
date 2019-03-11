import * as React from 'react'
import Page from '../components/Page'
import { NextContext } from 'next'
import Routes from '../utils/routes'

class DocPage extends React.Component<{ title: string, content: string }> {
  static getInitialProps = async function ({ query, asPath }: NextContext<{ title: string }>) {
    let content: any
    try {
      content = await import(`../markdowns/${query.title}.md`)
      content = content.default
    } catch{
      Routes.Router.replace('/_error', asPath)
      console.log('加载失败')
    }
    return { title: query.title, content }
  }
  render() {
    const { title, content } = this.props
    return (<Page title={title}>
      {content}
    </Page>
    )
  }
}

export default DocPage
