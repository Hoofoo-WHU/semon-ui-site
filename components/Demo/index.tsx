import React, { createRef } from 'react'
import { Button } from '@semon/semon-ui'
import './demo.scss'
import MD from 'markdown-it'
const md = new MD({ html: true })

export interface DemoProps extends React.Props<{}> {
  className?: string
  language?: string
  code: string
  description: string
  title: string
}

class Demo extends React.Component<DemoProps, { showCode: boolean }> {
  constructor(props: DemoProps) {
    super(props)
    this.codeClickHandle = this.codeClickHandle.bind(this)
  }
  readonly state = {
    showCode: false
  }
  codeClickHandle() {
    this.setState((pre) => ({ showCode: !pre.showCode }))
  }
  ref = createRef<HTMLPreElement>()
  render() {
    const { children, description, title, className, language, code } = this.props
    const height = this.state.showCode && this.ref.current ? this.ref.current.offsetHeight : 0
    return <section className={`${className} demo-component-wrapper`}>
      <div className='container'>{children}</div>
      <div className='description'>
        <span className='title'>{title}</span>
        <span className='content' dangerouslySetInnerHTML={{ __html: md.render(description) }} />
        <div title={this.state.showCode ? '隐藏代码' : '显示代码'}><Button className='demon-component-code-button' size='large' shape='circle' icon='code' onClick={this.codeClickHandle}></Button></div>
      </div>
      <div className='code' style={{ height }}>
        <pre className={`language-${language || 'jsx'}`} ref={this.ref}>
          <code className={`language-${language || 'jsx'}`}>
            {code}
          </code>
        </pre>
      </div>
    </section >
  }
}

export default Demo