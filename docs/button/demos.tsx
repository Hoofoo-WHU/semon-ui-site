import React from 'react'
import Demo from '../../components/Demo'
import { Button } from '@semon/semon-ui'

const demos = [
  <Demo className='component-button-type-demo'
    key='button-type'
    title='按钮类型'
    description='按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。'
    code={
      `import { Button } from '@semon/semon-ui'

ReactDOM.render(
  <div>
    <Button type='primary'>Primary</Button>
    <Button>Default</Button>
    <Button type='dashed'>Dashed</Button>
    <Button type='danger'>Danger</Button>
  </div>,
  container
)`
    }
  >
    <Button className='button-demo' type='primary'>Primary</Button>
    <Button className='button-demo'>Default</Button>
    <Button className='button-demo' type='dashed'>Dashed</Button>
    <Button className='button-demo' type='danger'>Danger</Button>
    <style jsx global>{`
    .component-button-type-demo .button-demo{
      margin-right: 8px;
      margin-bottom: 12px;
    }
  `}</style>
  </Demo>,
  <Demo className='component-button-icon-demo'
    key='button-icon'
    title='图标按钮'
    description='当需要在`Button`内嵌入`Icon`时，可以设置`icon/iconRight`属性，或者直接在`Button`内使用`Icon`组件。'
    code={
      `import { Button } from '@semon/semon-ui'
ReactDom.render(
  <div>
    <Button type='primary' shape='circle' icon='search' />
    <Button type='primary' icon='search'>Search</Button>
    <Button shape='circle' icon='search' />
    <Button icon='search'>Search</Button>
    <Button icon='left'>Prev</Button>
    <Button iconRight='right'>Next</Button>
  </div>,
  container
)`
    }
  >
    <Button className='button-demo' type='primary' shape='circle' icon='search' />
    <Button className='button-demo' type='primary' icon='search'>Search</Button>
    <Button className='button-demo' shape='circle' icon='search' />
    <Button className='button-demo' icon='search'>Search</Button>
    <Button className='button-demo' icon='left'>Prev</Button>
    <Button className='button-demo' iconRight='right'>Next</Button>
    <style jsx global>{`
    .component-button-icon-demo .button-demo{
      margin-right: 8px;
      margin-bottom: 12px;
    }
  `}</style>
  </Demo>,
  <Demo className='component-button-size-demo'
    key='button-size'
    title='按钮尺寸'
    description='按钮有大、中、小三种尺寸。</br>通过设置`size`为`large` `small`分别把按钮设为大、小尺寸。若不设置`size`，则尺寸为中。</br>按钮组合中按钮大小由按钮组合的`size`决定。'
    code={
      `import { Button } from '@semon/semon-ui'

ReactDOM.render(
  <div>
    <Button size='small'>Small</Button>
    <Button>Default</Button>
    <Button size='large'>Large</Button>
    <Button type='primary' size='small'>Small</Button>
    <Button type='primary'>Default</Button>
    <Button type='primary' size='large'>Large</Button>
    <br />
    <Button.Group size='small'>
      <Button icon='left'>Prev</Button>
      <Button>Small</Button>
      <Button iconRight='right'>Next</Button>
    </Button.Group>
    <Button.Group>
      <Button icon='left'>Prev</Button>
      <Button>Default</Button>
      <Button iconRight='right'>Next</Button>
    </Button.Group>
    <Button.Group size='large'>
      <Button icon='left'>Prev</Button>
      <Button>Large</Button>
      <Button iconRight='right'>Next</Button>
    </Button.Group>
  </div>,
  container
)`
    }
  >
    <Button className='button-demo' size='small'>Small</Button>
    <Button className='button-demo'>Default</Button>
    <Button className='button-demo' size='large'>Large</Button>
    <Button className='button-demo' type='primary' size='small'>Small</Button>
    <Button className='button-demo' type='primary'>Default</Button>
    <Button className='button-demo' type='primary' size='large'>Large</Button>
    <br />
    <Button.Group className='button-demo' size='small'>
      <Button icon='left'>Prev</Button>
      <Button>Small</Button>
      <Button iconRight='right'>Next</Button>
    </Button.Group>
    <Button.Group className='button-demo'>
      <Button icon='left'>Prev</Button>
      <Button>Default</Button>
      <Button iconRight='right'>Next</Button>
    </Button.Group>
    <Button.Group className='button-demo' size='large'>
      <Button icon='left'>Prev</Button>
      <Button>Large</Button>
      <Button iconRight='right'>Next</Button>
    </Button.Group>
    <style jsx global>{`
  .component-button-size-demo .button-demo{
    margin-right: 8px;
    margin-bottom: 12px;
  }
`}</style>
  </Demo>,
  <Demo className='component-button-disabled-demo'
    key='button-disabled'
    title='不可用状态'
    description='添加`disabled`属性即可让按钮处于不可用状态，同时按钮样式也会改变。'
    code={
      `import { Button } from '@semon/semon-ui'

ReactDOM.render(
  <div>
    <Button type='primary'>Primary</Button>
    <Button type='primary' disabled>Primary(disabled)</Button>
    <Button className='button-demo'>Default</Button>
    <Button disabled>Default(disabled)</Button>
    <br />
    <Button type='dashed'>Dashed</Button>
    <Button type='dashed' disabled>Dashed(disabled)</Button>
    <Button type='danger'>Danger</Button>
    <Button type='danger' disabled>Danger(disabled)</Button>
  </div>,
  container
)`
    }
  >
    <Button className='button-demo' type='primary'>Primary</Button>
    <Button className='button-demo' type='primary' disabled>Primary(disabled)</Button>
    <Button className='button-demo'>Default</Button>
    <Button className='button-demo' disabled>Default(disabled)</Button>
    <br />
    <Button className='button-demo' type='dashed'>Dashed</Button>
    <Button className='button-demo' type='dashed' disabled>Dashed(disabled)</Button>
    <Button className='button-demo' type='danger'>Danger</Button>
    <Button className='button-demo' type='danger' disabled>Danger(disabled)</Button>
    <style jsx global>{`
  .component-button-disabled-demo .button-demo{
    margin-right: 8px;
    margin-bottom: 12px;
  }
`}</style>
  </Demo>,
  <Demo className='component-button-group-demo'
    key='button-group'
    title='按钮组合'
    description='可以将多个`Button`放入`Button.Group`的容器中。<br/>可以在`Button.Group`的属性为其中所有`Button`添加属性。'
    code={
      `import { Button } from '@semon/semon-ui'

ReactDOM.render(
  <div>
    <Button.Group className='button-demo'>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </Button.Group>
    <Button.Group disabled>
      <Button>Cancel</Button>
      <Button>OK</Button>
    </Button.Group>
    <Button.Group type='primary'>
      <Button icon='left'>Prev</Button>
      <Button iconRight='right'>Next</Button>
    </Button.Group>
    <Button.Group type='primary'>
      <Button icon='user' />
      <Button icon='search' />
      <Button icon='code' />
    </Button.Group>
  <div>,
  container
)`
    }
  >
    <Button.Group className='button-demo'>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </Button.Group>
    <Button.Group className='button-demo' disabled>
      <Button>Cancel</Button>
      <Button>OK</Button>
    </Button.Group>
    <Button.Group className='button-demo' type='primary'>
      <Button icon='left'>Prev</Button>
      <Button iconRight='right'>Next</Button>
    </Button.Group>
    <Button.Group className='button-demo' type='primary'>
      <Button icon='user' />
      <Button icon='search' />
      <Button icon='code' />
    </Button.Group>
    <style jsx global>{`
.component-button-group-demo .button-demo{
  margin-right: 8px;
  margin-bottom: 12px;
}
`}</style>
  </Demo>,
]

export default demos
