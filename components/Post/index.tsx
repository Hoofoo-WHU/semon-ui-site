import React, { ReactNode } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-typescript'
import MD from 'markdown-it'
import 'github-markdown-css'
import './post.scss'
import './highlight.scss'
const md = new MD({ html: true })


export interface PostProps extends React.Props<{}> {
  children: string | ReactNode
}

class Post extends React.Component<PostProps> {
  static displayName = 'Post'

  private wrapper = React.createRef<HTMLDivElement>()
  private highlight() {
    if (this.wrapper.current) {
      Prism.highlightAllUnder(this.wrapper.current)
    }
  }

  componentDidMount() {
    this.highlight()
  }

  componentDidUpdate() {
    this.highlight()
  }

  render() {
    if (typeof this.props.children === 'string') {
      return <div className='markdown-body'
        ref={this.wrapper}
        dangerouslySetInnerHTML={{ __html: md.render(this.props.children) }} />
    } else {
      return <div className='markdown-body'
        ref={this.wrapper}>{this.props.children}</div>
    }
  }
}

export default Post