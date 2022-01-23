import Logo from '@/assets/logo.png'

export interface ColumnProps {
  id: number
  title: string
  avatar?: string
  description: string
}

export interface PostProps {
  id: number
  title: string
  content: string
  image?: string
  createdAt: string
  columnId: number
}

export const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1的专栏，请点击查看!',
    avatar: Logo,
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是test2的专栏，请点击查看!',
    avatar: Logo,
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这是test3的专栏，请点击查看!',
    avatar: Logo,
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是test4的专栏，请点击查看!',
  },
]

export const testPosts: PostProps[] = [
  {
    id: 1,
    title: '这是我的第一篇文章',
    content:
      'this is my first post, thank you so much for reading and correcting, your opinion is so valuable to me!',
    image: Logo,
    createdAt: '2022-01-23 20:16:17',
    columnId: 1,
  },
  {
    id: 2,
    title: '这是我的第一篇文章',
    content:
      'this is my first post, thank you so much for reading and correcting, your opinion is so valuable to me!',
    image: Logo,
    createdAt: '2022-02-23 20:16:17',
    columnId: 2,
  },
  {
    id: 3,
    title: '这是我的第一篇文章',
    content:
      'this is my first post, thank you so much for reading and correcting, your opinion is so valuable to me!',
    image: Logo,
    createdAt: '2022-01-23 20:16:17',
    columnId: 3,
  },
  {
    id: 4,
    title: '这是我的第一篇文章',
    content:
      'this is my first post, thank you so much for reading and correcting, your opinion is so valuable to me!',
    image: Logo,
    createdAt: '2022-01-23 20:16:17',
    columnId: 4,
  },
]
