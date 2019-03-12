import React from 'react'
import { Menu } from '@semon/semon-ui'
import { withRouter, SingletonRouter } from 'next/router'
import Link from '../Link'
import Data, { MenuData, PostData, PostGroupData, PostSubMenuData } from '../../data/PostMenu'
import './doc-menu.scss'

const { SubMenu, ItemGroup } = Menu

const ItemLink: React.FunctionComponent<{ title: string }> = ({ title, children }) => {
  return <Link scroll={false} href={`/doc?title=${title}`} as={`/doc/${title}`}><Menu.Item name={title}>{children}</Menu.Item></Link>
}

class DocMenu extends React.Component<{ router: SingletonRouter<any> }, { opens: string[] }> {
  readonly state = {
    opens: Data.opens
  }

  private openChangeHandle(opens: string[]) {
    this.setState({ opens })
  }

  renderMenu(data: MenuData['data']) {
    return data.map((e, index) => {
      switch (e.type) {
        case PostData.type:
          return <ItemLink title={(e as PostData).file} key={index}>
            <span>{(e as PostData).title}</span>
            <span className='sub-title'>{(e as PostData).subTitle}</span>
          </ItemLink>
        case PostGroupData.type:
          return <ItemGroup title={e.title} key={index}>
            {this.renderMenu((e as PostGroupData).children)}
          </ItemGroup>
        case PostSubMenuData.type:
          return <SubMenu title={e.title} name={(e as PostSubMenuData).key} key={index}>
            {this.renderMenu((e as PostSubMenuData).children)}
          </SubMenu>
      }
    })
  }
  render() {
    const { opens } = this.state
    return <Menu className='doc-menu'
      activeName={this.props.router.query.title}
      opens={opens}
      onOpenChange={this.openChangeHandle.bind(this)}>
      {this.renderMenu(Data.data)}
    </Menu>
  }
}

export default withRouter<any, { title: string }>(DocMenu)