import React, { createRef } from 'react'

export interface DemoProps extends React.Props<{}> {
  className?: string
  language?: string
  code: string
  description: string
  title: string
}

class Demo extends React.Component<DemoProps, { showCode: boolean }> {
  readonly state = {
    showCode: false
  }
  ref = createRef<HTMLPreElement>()
  render() {
    const { children, description, title, className, language, code } = this.props
    const height = this.state.showCode && this.ref.current ? this.ref.current.offsetHeight : 0
    return <section className={`${className} wrapper`}>
      <div className='container'>{children}</div>
      <div className='description' onClick={() => this.setState((pre) => ({ showCode: !pre.showCode }))}>
        <span className='title'>{title}</span>
        <span>{description}</span>
      </div>
      <div className='code' style={{ height }}>
        <pre className={`language-${language || 'jsx'}`} ref={this.ref}>
          <code className={`language-${language || 'jsx'}`}>
            {code}
          </code>
        </pre>
      </div>
      <style jsx>{`
        .wrapper{
          box-sizing: border-box;
          border: 1px solid #e8e8e8;
          border-radius: 4px;
        }
        .container{
          padding: 30px;
        }
        .description{
          border-top: 1px solid #e8e8e8;
          padding: 20px 30px;
          position: relative;
          color: #6A737D;
          font-size: 14px;
        }
        .description .title{
          position: absolute;
          background-color: #fff;
          padding: 5px 10px;
          left:20px;
          top:0;
          color: #314659;
          font-weight: 500;
          font-size: 16px;
          transform: translateY(-50%);
        }
        .code{
          transition: height .3s;
          height: 0;
          overflow: hidden;
        }
        pre{
          border-top: 1px dashed #e8e8e8;
          margin:0;
          padding-left: 30px;
          padding-right: 30px;
        }
      `}</style>
    </section >
  }
}

export default Demo