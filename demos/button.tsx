import React from 'react'
import Demo from '../components/Demo'
import { Button } from '@semon/semon-ui'

const demos = [
  <Demo className='component-button-type-demo'
    key='type'
    title='按钮类型'
    description='按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮'
    code={
      `import { Button } from '@semon/semon-ui'

<Button type='primary'>Primary</Button>
<Button>Default</Button>
<Button type='dashed'>Dashed</Button>
<Button type='danger'>Danger</Button>`
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
  </Demo>]

export default demos

// export default [<Demo title='' description='' key='1'>
//   <Button type='primary'>Primary</Button>
//   <Button>Default</Button>
//   <Button type='dashed'>Dashed</Button>
//   <Button type='danger'>Danger</Button>
// </Demo>]