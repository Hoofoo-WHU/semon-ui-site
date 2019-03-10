import * as React from 'react'
import Link from 'next/link'
import { Layout, Button } from '@semon/semon-ui'
import { UrlLike } from 'next/router';
const { Header, Content } = Layout

interface NavLinkProps {
  prefetch?: boolean;
  shallow?: boolean;
  scroll?: boolean;
  replace?: boolean;
  onError?(error: any): void;
  href?: string | UrlLike;
  as?: string | UrlLike;
  passHref?: boolean;
  children: React.ReactNode;
}

const NavLink: React.FunctionComponent<NavLinkProps> = (props) => (
  <Link {...props}>
    <Button style={{ marginRight: 8 }}>{props.children}</Button>
  </Link>
)

const Navigator: React.FunctionComponent = ({ children }) => (
  <div>
    <Layout>
      <Header>
        <NavLink href='/'>主页</NavLink>
        <NavLink href='/about'>关于</NavLink>
      </Header>
      <Content>{children}</Content>
    </Layout>
  </div>
)

export default Navigator
