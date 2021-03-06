import React from 'react'
import Demo from '../../components/Demo'
import { Icon } from '@semon/semon-ui'

const demos = [
  <Demo className='component-icon-demo'
    key='icon'
    title='基本用法'
    description='通过`type`属性指定图标名称, `spin`属性使图标旋转。'
    code={
      `import { Icon } from '@semon/semon-ui'

ReactDOM.render(
  <div>
    <Icon type='user' />
    <Icon type='search' />
    <Icon type='code' />
    <Icon type='check-circle-fill' spin />
  </div>,
  container
)`
    }
  >
    <Icon className='demo-icon' type='user' />
    <Icon className='demo-icon' type='search' />
    <Icon className='demo-icon' type='code' />
    <Icon className='demo-icon' type='check-circle-fill' spin />
    <style jsx global>{`
  .component-icon-demo .demo-icon{
    margin-right: 8px;
    margin-bottom: 12px;
  }
`}</style>
  </Demo>,
]

export default demos