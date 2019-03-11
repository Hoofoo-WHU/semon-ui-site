import React from 'react'
import NextLink, { LinkProps } from 'next/link'
import getConfig from 'next/config'
import path from 'path'
const { publicRuntimeConfig } = getConfig()

export default class Link extends React.Component<LinkProps>{
  render() {
    let aspath = this.props.as as string
    if (aspath && path.isAbsolute(aspath)) {
      aspath = path.join('/', publicRuntimeConfig.BASE_URL, aspath)
    }
    if (!aspath) {
      aspath = this.props.href as string
      if (aspath && path.isAbsolute(aspath)) {
        aspath = path.join('/', publicRuntimeConfig.BASE_URL, aspath)
      }
    }
    return <NextLink {...this.props} as={aspath}></NextLink>
  }
}