import React from 'react'
import { Menu } from '@semon/semon-ui'
import { withRouter, SingletonRouter } from 'next/router'
import Routes from '../utils/routes'
const { Link } = Routes

class DocMenu extends React.Component<{ router: SingletonRouter<any> }> {
  render() {
    return <Menu activeName={this.props.router.query.title} style={{ minWidth: 260, minHeight: '100vh' }}>
      <Link scroll={false} route='/doc/introduce'><Menu.Item name='introduce'>介绍</Menu.Item></Link>
      <Link scroll={false} route='/doc/install'><Menu.Item name='install'>安装</Menu.Item></Link>
    </Menu>
  }
}

export default withRouter<any, { title: string }>(DocMenu)