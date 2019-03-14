import React, { Fragment } from 'react'
import Demo from '../../components/Demo'
import { Row, Col } from '@semon/semon-ui'

const demos = <Fragment>
  <Demo className='component-grid-demo-basic'
    title='基础栅格'
    description='通过`row`和`col`组件，并通过`col`组件的`span`属性我们就可以自由地组合布局。'
    code={
      `import { Row, Col } from '@semon/semon-ui'

ReactDOM.render(
  <div>
    <Row>
      <Col span='12'>span-12</Col>
      <Col span='12'>span-12</Col>
    </Row>
    <Row>
      <Col span='8'>span-8</Col>
      <Col span='8'>span-8</Col>
      <Col span='8'>span-8</Col>
    </Row>
    <Row>
      <Col span='6'>span-6</Col>
      <Col span='6'>span-6</Col>
      <Col span='6'>span-6</Col>
      <Col span='6'>span-6</Col>
    </Row> 
  </div>,
  container
)`}
  >
    <Row className='demo-row'>
      <Col className='demo-col' span='12'>span-12</Col>
      <Col className='demo-col' span='12'>span-12</Col>
    </Row>
    <Row className='demo-row'>
      <Col className='demo-col' span='8'>span-8</Col>
      <Col className='demo-col' span='8'>span-8</Col>
      <Col className='demo-col' span='8'>span-8</Col>
    </Row>
    <Row className='demo-row'>
      <Col className='demo-col' span='6'>span-6</Col>
      <Col className='demo-col' span='6'>span-6</Col>
      <Col className='demo-col' span='6'>span-6</Col>
      <Col className='demo-col' span='6'>span-6</Col>
    </Row>
    <style jsx global>{`
    .component-grid-demo-basic .demo-row{
      margin-bottom: 12px;
    }
    .component-grid-demo-basic .demo-row .demo-col{
      background-color: #1aa1e6;
      color: #fff;
      text-align: center;
      line-height: 3em;
    }
    .component-grid-demo-basic .demo-row .demo-col:nth-child(2n + 1){
      background-color: #5ebded;
    }
  `}</style>
  </Demo>
  <Demo className='component-grid-demo-gutter'
    title='分栏间隔'
    description='`Row`组件提供`gutter`属性来指定每一栏之间的间隔，默认间隔为 0。'
    code={
      `import { Row, Col } from '@semon/semon-ui'

ReactDOM.render(
  <Row gutter={12}>
    <Col span='8'>
      <div className='inner-box'>span-8</div>
    </Col>
    <Col span='8'>
      <div className='inner-box'>span-8</div>
    </Col>
    <Col span='8'>
      <div className='inner-box'>span-8</div>
    </Col>
  </Row>,
  container
)`
    }
  >
    <Row className='demo-row' gutter={12}>
      <Col className='demo-col' span='8'>
        <div className='inner-box'>span-8</div>
      </Col>
      <Col className='demo-col' span='8'>
        <div className='inner-box'>span-8</div>
      </Col>
      <Col className='demo-col' span='8'>
        <div className='inner-box'>span-8</div>
      </Col>
    </Row>
    <style jsx global>{`
    .component-grid-demo-gutter .demo-row{
      margin-bottom: 12px;
    }
    .component-grid-demo-gutter .inner-box{
      background-color: #1aa1e6; 
      line-height: 3em;
      color: white;
      text-align: center;
    }
  `}</style>
  </Demo>
  <Demo className='component-grid-demo-offset'
    key='grid-offset'
    title='分栏偏移'
    description='通过制定`Col`组件的`offset`属性可以指定分栏偏移的栏数。'
    code={
      `import { Row, Col } from '@semon/semon-ui'

ReactDOM.render(
  <div>
    <Row gutter={12}>
      <Col span='6'>
        <div className='inner-box'>span-6</div>
      </Col>
      <Col span='6' offset='6'>
        <div className='inner-box'>span-6</div>
      </Col>
    </Row>
    <Row gutter={12}>
      <Col span='6' offset='6'>
        <div className='inner-box'>span-6</div>
      </Col>
      <Col span='6' offset='6'>
        <div className='inner-box'>span-6</div>
      </Col>
    </Row>
    <Row gutter={12}>
      <Col span='12' offset='6'>
        <div className='inner-box'>span-12</div>
      </Col>
    </Row>
  </div>,
  container
)`
    }
  >
    <Row className='demo-row' gutter={12}>
      <Col className='demo-col' span='6'>
        <div className='inner-box'>span-6</div>
      </Col>
      <Col className='demo-col' span='6' offset='6'>
        <div className='inner-box'>span-6</div>
      </Col>
    </Row>
    <Row className='demo-row' gutter={12}>
      <Col className='demo-col' span='6' offset='6'>
        <div className='inner-box'>span-6</div>
      </Col>
      <Col className='demo-col' span='6' offset='6'>
        <div className='inner-box'>span-6</div>
      </Col>
    </Row>
    <Row className='demo-row' gutter={12}>
      <Col className='demo-col' span='12' offset='6'>
        <div className='inner-box'>span-12</div>
      </Col>
    </Row>
    <style jsx global>{`
    .component-grid-demo-offset .demo-row{
      margin-bottom: 12px;
    }
    .component-grid-demo-offset .inner-box{
      background-color: #1aa1e6; 
      line-height: 3em;
      color: white;
      text-align: center;
    }
  `}</style>
  </Demo>
  <Demo className='component-grid-demo-order'
    title='分栏顺序'
    description='`Col`组件提供`order`属性来指定出现顺序。'
    code={
      `import { Row, Col } from '@semon/semon-ui'

ReactDOM.render(
  <Row gutter={12}>
    <Col span='8' order='3'>
      <div className='inner-box'>col-1 order-3</div>
    </Col>
    <Col span='8' order='2'>
      <div className='inner-box'>col-2 order-2</div>
    </Col>
    <Col span='8' order='1'>
      <div className='inner-box'>col-3 order-1</div>
    </Col>
  </Row>,
  container
)`
    }
  >
    <Row className='demo-row' gutter={12}>
      <Col className='demo-col' span='8' order='3'>
        <div className='inner-box'>col-1 order-3</div>
      </Col>
      <Col className='demo-col' span='8' order='2'>
        <div className='inner-box'>col-2 order-2</div>
      </Col>
      <Col className='demo-col' span='8' order='1'>
        <div className='inner-box'>col-3 order-1</div>
      </Col>
    </Row>
    <style jsx global>{`
    .component-grid-demo-order .demo-row{
      margin-bottom: 12px;
    }
    .component-grid-demo-order .inner-box{
      background-color: #1aa1e6; 
      line-height: 3em;
      color: white;
      text-align: center;
    }
  `}</style>
  </Demo>
  <Demo className='component-grid-demo-justify'
    key='grid-justify'
    title='Flex 布局'
    description='`Row`组件提供`justify`属性来指定`flex`布局方式。'
    code={
      `import { Row, Col } from '@semon/semon-ui'

ReactDOM.render(
  <div>
    <Row gutter={12}>
      <Col span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
      <Col span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
      <Col span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
    </Row>
    <Row gutter={12} justify='center'>
      <Col span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
      <Col span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
      <Col span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
    </Row>
    <Row gutter={12} justify='end'>
      <Col span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
      <Col span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
      <Col span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
    </Row>
    <Row gutter={12} justify='space-between'>
      <Col span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
      <Col span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
      <Col span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
    </Row>
    <Row gutter={12} justify='space-around'>
      <Col span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
      <Col span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
      <Col span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
    </Row>
  </div>,
  container
)`
    }
  >
    <Row className='demo-row' gutter={12}>
      <Col className='demo-col' span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
      <Col className='demo-col' span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
      <Col className='demo-col' span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
    </Row>
    <Row className='demo-row' gutter={12} justify='center'>
      <Col className='demo-col' span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
      <Col className='demo-col' span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
      <Col className='demo-col' span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
    </Row>
    <Row className='demo-row' gutter={12} justify='end'>
      <Col className='demo-col' span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
      <Col className='demo-col' span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
      <Col className='demo-col' span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
    </Row>
    <Row className='demo-row' gutter={12} justify='space-between'>
      <Col className='demo-col' span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
      <Col className='demo-col' span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
      <Col className='demo-col' span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
    </Row>
    <Row className='demo-row' gutter={12} justify='space-around'>
      <Col className='demo-col' span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
      <Col className='demo-col' span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
      <Col className='demo-col' span='4'>
        <div className='inner-box'>span-4</div>
      </Col>
    </Row>
    <style jsx global>{`
  .component-grid-demo-justify .demo-row{
    margin-bottom: 12px;
  }
  .component-grid-demo-justify .inner-box{
    background-color: #1aa1e6; 
    line-height: 3em;
    color: white;
    text-align: center;
  }
`}</style>
  </Demo>
  <Demo className='component-grid-demo-align'
    title='分栏对齐'
    description='`Row`组件提供`align`属性来指定对齐方式。'
    code={
      `import { Row, Col } from '@semon/semon-ui'

ReactDOM.render(
  <div>
    <Row gutter={12} justify='center' align='top'>
      <Col span='4'><div className='inner-box' style={{ height: 100 }}>span-4</div></Col>
      <Col span='4'><div className='inner-box' style={{ height: 50 }}>span-4</div></Col>
      <Col span='4'><div className='inner-box' style={{ height: 120 }}>span-4</div></Col>
      <Col span='4'><div className='inner-box' style={{ height: 80 }}>span-4</div></Col>
    </Row>
    <Row justify='space-between' align='middle'>
      <Col span='4'><div className='inner-box' style={{ height: 100 }}>span-4</div></Col>
      <Col span='4'><div className='inner-box' style={{ height: 50 }}>span-4</div></Col>
      <Col span='4'><div className='inner-box' style={{ height: 120 }}>span-4</div></Col>
      <Col span='4'><div className='inner-box' style={{ height: 80 }}>span-4</div></Col>
    </Row>
    <Row justify='space-around' align='bottom'>
      <Col span='4'><div className='inner-box' style={{ height: 100 }}>span-4</div></Col>
      <Col span='4'><div className='inner-box' style={{ height: 50 }}>span-4</div></Col>
      <Col span='4'><div className='inner-box' style={{ height: 120 }}>span-4</div></Col>
      <Col span='4'><div className='inner-box' style={{ height: 80 }}>span-4</div></Col>
    </Row>
  </div>,
  container
)`
    }
  >
    <div className='wrapper'>
      <Row className='demo-row' gutter={12} justify='center' align='top'>
        <Col className='demo-col' span='4'>
          <div className='inner-box' style={{ height: 100 }}>span-4</div>
        </Col>
        <Col className='demo-col' span='4'>
          <div className='inner-box' style={{ height: 50 }}>span-4</div>
        </Col>
        <Col className='demo-col' span='4'>
          <div className='inner-box' style={{ height: 120 }}>span-4</div>
        </Col>
        <Col className='demo-col' span='4'>
          <div className='inner-box' style={{ height: 80 }}>span-4</div>
        </Col>
      </Row>
      <Row className='demo-row' justify='space-between' align='middle'>
        <Col className='demo-col' span='4'>
          <div className='inner-box' style={{ height: 100 }}>span-4</div>
        </Col>
        <Col className='demo-col' span='4'>
          <div className='inner-box' style={{ height: 50 }}>span-4</div>
        </Col>
        <Col className='demo-col' span='4'>
          <div className='inner-box' style={{ height: 120 }}>span-4</div>
        </Col>
        <Col className='demo-col' span='4'>
          <div className='inner-box' style={{ height: 80 }}>span-4</div>
        </Col>
      </Row>
      <Row className='demo-row' justify='space-around' align='bottom'>
        <Col className='demo-col' span='4'>
          <div className='inner-box' style={{ height: 100 }}>span-4</div>
        </Col>
        <Col className='demo-col' span='4'>
          <div className='inner-box' style={{ height: 50 }}>span-4</div>
        </Col>
        <Col className='demo-col' span='4'>
          <div className='inner-box' style={{ height: 120 }}>span-4</div>
        </Col>
        <Col className='demo-col' span='4'>
          <div className='inner-box' style={{ height: 80 }}>span-4</div>
        </Col>
      </Row>
    </div>
    <style jsx global>{`
        .component-grid-demo-align .wrapper{
          overflow:hidden;
        }
        .component-grid-demo-align .demo-row{
          margin-bottom: 12px;
          background-color: #f8f8f8;
        }
        .component-grid-demo-align .inner-box{
          background-color: #1aa1e6; 
          line-height: 3em;
          color: white;
          text-align: center;
        }
      `}
    </style>
  </Demo>
  <Demo
    title='响应式布局'
    description='`Col`组件提供`xs` `sm` `md` `lg` `xl`属性来指定不同大小屏幕对应的`span`属性，如果缺省则会优先更大屏。'
    code={
      `import { Row, Col } from '@semon/semon-ui'

ReactDOM.render(
  <Row gutter={8}>
    <Col xs='2' sm='4' md='6' lg='8' xl='10'>
      <div className='inner-box'>Responseable</div>
    </Col>
    <Col xs='20' sm='16' md='12' lg='8' xl='4'>
      <div className='inner-box'>Responseable</div>
    </Col>
    <Col xs='2' sm='4' md='6' lg='8' xl='10'>
      <div className='inner-box'>Responseable</div>
    </Col>
  </Row>,
  container
)`
    }
  >
    <Row className='demo-row' gutter={8}>
      <Col xs='2' sm='4' md='6' lg='8' xl='10'>
        <div className='inner-box'>Responseable</div>
      </Col>
      <Col xs='20' sm='16' md='12' lg='8' xl='4'>
        <div className='inner-box'>Responseable</div>
      </Col>
      <Col xs='2' sm='4' md='6' lg='8' xl='10'>
        <div className='inner-box'>Responseable</div>
      </Col>
    </Row>
    <style jsx>{`
    .demo-row{
      margin-bottom: 12px;
    }
    .inner-box{
      background-color: #1aa1e6; 
      line-height: 3em;
      color: white;
      text-align: center;
    }
  `}</style>
  </Demo>
  <Demo
    title='其他属性的响应式'
    description='`span` `order` `offset`属性可以通过内嵌到`xs` `sm` `md` `lg` `xl`属性中来使用。'
    code={
      `import { Row, Col } from '@semon/semon-ui'

ReactDOM.render(
  <Row gutter={8}>
    <Col md={{ span: '5', offset: '1' }} xl={{ span: '6', offset: '2' }}>
      <div className='inner-box'>Responseable</div>
    </Col>
    <Col md={{ span: '11', offset: '1' }} xl={{ span: '6', offset: '2' }}>
      <div className='inner-box'>Responseable</div>
    </Col>
    <Col md={{ span: '5', offset: '1' }} xl={{ span: '6', offset: '2' }}>
      <div className='inner-box'>Responseable</div>
    </Col>
  </Row>,
  container
)`
    }
  >
    <Row className='demo-row' gutter={8}>
      <Col md={{ span: '5', offset: '1' }} xl={{ span: '6', offset: '2' }}>
        <div className='inner-box'>Responseable</div>
      </Col>
      <Col md={{ span: '11', offset: '1' }} xl={{ span: '6', offset: '2' }}>
        <div className='inner-box'>Responseable</div>
      </Col>
      <Col md={{ span: '5', offset: '1' }} xl={{ span: '6', offset: '2' }}>
        <div className='inner-box'>Responseable</div>
      </Col>
    </Row>
    <style jsx>{`
    .demo-row{
      margin-bottom: 12px;
    }
    .inner-box{
      background-color: #1aa1e6; 
      line-height: 3em;
      color: white;
      text-align: center;
    }
  `}</style>
  </Demo>
</Fragment>

export default demos