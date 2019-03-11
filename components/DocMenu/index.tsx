import React from 'react'
import { Menu } from '@semon/semon-ui'
import { withRouter, SingletonRouter } from 'next/router'
import Link from '../Link'
import './doc-menu.scss'

class DocMenu extends React.Component<{ router: SingletonRouter<any> }> {
  render() {
    return <Menu className='doc-menu' activeName={this.props.router.query.title}>
      <Link scroll={false} href='/doc?title=introduce' as='/doc/introduce'><Menu.Item name='introduce'>介绍</Menu.Item></Link>
      <Link scroll={false} href='/doc?title=getting-started' as='/doc/getting-started'><Menu.Item name='getting-started'>安装</Menu.Item></Link>
    </Menu>
  }
}

export default withRouter<any, { title: string }>(DocMenu)