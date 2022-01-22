<template>
  <column-list :list="testData" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import Logo from '@/assets/logo.png'

const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1的专栏，请点击查看!',
    avatar: Logo
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是test2的专栏，请点击查看!',
    avatar: Logo
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这是test3的专栏，请点击查看!',
    avatar: Logo
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是test4的专栏，请点击查看!'
  }
]

export default defineComponent({
  name: 'Home',
  components: {
    ColumnList
  },
  setup () {
    return {
      testData
    }
  }
})
</script>