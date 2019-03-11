import React from 'react'
import { Menu } from '@semon/semon-ui'
import { withRouter, SingletonRouter } from 'next/router'
import Link from '../components/Link'

class DocMenu extends React.Component<{ router: SingletonRouter<any> }> {
  render() {
    return <Menu activeName={this.props.router.query.title} style={{ minWidth: 260, minHeight: '100vh' }}>
      <Link scroll={false} href='/doc?title=introduce' as='/doc/introduce'><Menu.Item name='introduce'>介绍</Menu.Item></Link>
      <Link scroll={false} href='/doc?title=install' as='/doc/install'><Menu.Item name='install'>安装</Menu.Item></Link>
    </Menu>
  }
}

export default withRouter<any, { title: string }>(DocMenu)