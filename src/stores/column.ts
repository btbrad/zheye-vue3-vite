import { defineStore } from 'pinia'
import { testData, testPosts, ColumnProps, PostProps } from '@/testData'

export const useColumnStore = defineStore('column', {
  state: () => {
    return {
      columns: testData,
      posts: testPosts,
    }
  },
  actions: {},
})
