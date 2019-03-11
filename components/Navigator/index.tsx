import * as React from 'react'
import { Layout, Button } from '@semon/semon-ui'
import Route, { Switch } from '../Route'
import DocMenu from '../DocMenu'
const { Header, Content, Sider } = Layout
import { UrlLike } from 'next/router'
import Link from '../Link'
import './navigator.scss'

interface NavLinkProps {
  prefetch?: boolean
  shallow?: boolean
  scroll?: boolean
  replace?: boolean
  onError?(error: any): void
  href?: string | UrlLike
  as?: string | UrlLike
  passHref?: boolean
  children: React.ReactNode
}

const NavLink: React.FunctionComponent<NavLinkProps> = (props) => (
  <Link {...props}>
    <Button style={{ marginRight: 8 }}>{props.children}</Button>
  </Link>
)

const Navigator: React.FunctionComponent = ({ children }) => (
  <Layout>
    <Header className='page-header'>
      <NavLink href='/'>主页</NavLink>
      <NavLink href='/doc?title=introduce' as='/doc/introduce'>组件</NavLink>
    </Header>
    <Switch>
      <Route href='/doc'>
        <Layout>
          <Sider className='doc-sider'><DocMenu></DocMenu></Sider>
          <Content><Content>{children}</Content></Content>
        </Layout>
      </Route>
      <Route><Content>{children}</Content></Route>
    </Switch>
  </Layout>
)

export default Navigator
