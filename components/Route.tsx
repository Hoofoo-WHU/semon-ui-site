import React, { ReactElement } from 'react'
import pathToRegexp from 'path-to-regexp'
import { WithRouterProps, withRouter, SingletonRouter } from 'next/router'

export interface RouteProps extends WithRouterProps {
  href?: string
  router: SingletonRouter
}
export interface SwitchProps extends WithRouterProps {
  router: SingletonRouter
}
function match(href: string, route: string) {
  // console.log(href, pathToRegexp(href))
  return pathToRegexp(href).test(route)
}

class _Switch extends React.Component<SwitchProps> {
  render() {
    let matched: ReactElement | null = null
    React.Children.toArray(this.props.children).some((child: any) => {
      let isMatch = !child.props.href || match(child.props.href, this.props.router.route)
      if (isMatch) {
        matched = child
      }
      return isMatch
    })
    return matched
  }
}

class Route extends React.Component<RouteProps>{
  private match() {
    if (this.props.href) {
      return match(this.props.href, this.props.router.route)
    }
    return true
  }
  render() {
    return this.match() ? this.props.children : null
  }
}

export default withRouter(Route)

export const Switch = withRouter(_Switch)