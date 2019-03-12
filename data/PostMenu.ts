export class PostData {
  static type = Symbol('PostData')
  type = PostData.type
  title: string
  subTitle?: string
  file: string
  constructor(title: string, file: string, subTitle?: string) {
    this.title = title
    this.subTitle = subTitle
    this.file = file
  }
}

export class PostGroupData {
  static type = Symbol('PostGroupData')
  type = PostGroupData.type
  title: string
  children: PostData[]
  constructor(title: string, children: PostData[]) {
    this.title = title
    this.children = children
  }
}

export class PostSubMenuData {
  static type = Symbol('PostSubMenuData')
  type = PostSubMenuData.type
  key: string
  title: string
  children: (PostData | PostSubMenuData | PostGroupData)[]
  constructor(title: string, key: string, children: (PostData | PostSubMenuData | PostGroupData)[]) {
    this.title = title
    this.key = key
    this.children = children
  }
}

export interface MenuData {
  default: PostData,
  opens: string[]
  data: (PostData | PostSubMenuData | PostGroupData)[]
}
export const Posts = {
  ['getting-started']: new PostData('快速开始', 'getting-started'),
  introduce: new PostData('介绍', 'introduce'),
  button: new PostData('Button', 'button', '按钮')
}

const data: MenuData = {
  default: Posts['getting-started'],
  opens: ['components'],
  data: [
    Posts['introduce'],
    Posts['getting-started'],
    new PostSubMenuData('Components', 'components', [
      new PostGroupData('通用', [
        Posts['button']
      ])
    ])
  ]
}

export default data