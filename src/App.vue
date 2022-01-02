<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
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
</script>

<template>
  <div class="container">
    <column-list :list="testData" />
  </div>
</template>

<style>
</style>
