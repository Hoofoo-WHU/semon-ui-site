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
  introduce: new PostData('介绍', 'introduce'),
  ['getting-started']: new PostData('快速开始', 'getting-started'),
  button: new PostData('Button', 'button', '按钮'),
  icon: new PostData('Icon', 'icon', '图标'),
  grid: new PostData('Grid', 'grid', '栅格'),
  layout: new PostData('Layout', 'layout', '布局'),
  menu: new PostData('Menu', 'menu', '菜单'),
  input: new PostData('Input', 'input', '输入框'),
  message: new PostData('Message', 'message', '全局提示')
}
export type PostTitle = keyof typeof Posts
const keys = Reflect.ownKeys(Posts)

export function getNext(title: PostTitle): PostData | null {
  const next = keys[keys.indexOf(title) + 1]
  return next ? Posts[next as PostTitle] : null
}

export function getPrev(title: PostTitle): PostData | null {
  const prev = keys[keys.indexOf(title) - 1]
  return prev ? Posts[prev as PostTitle] : null
}

const data: MenuData = {
  default: Posts['getting-started'],
  opens: ['components'],
  data: [
    Posts.introduce,
    Posts['getting-started'],
    new PostSubMenuData('Components', 'components', [
      new PostGroupData('通用', [
        Posts.button,
        Posts.icon
      ]),
      new PostGroupData('布局', [
        Posts.grid,
        Posts.layout
      ]),
      new PostGroupData('导航', [
        Posts.menu
      ]),
      new PostGroupData('表单', [
        Posts.input
      ]),
      new PostGroupData('反馈', [
        Posts.message
      ])
    ])
  ]
}

export default data