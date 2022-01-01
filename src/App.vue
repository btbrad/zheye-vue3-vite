<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1的专栏，请点击查看!',
    avatar: 'https://thumbs.dreamstime.com/z/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是test2的专栏，请点击查看!',
    avatar: 'https://thumbs.dreamstime.com/z/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg'
  }
]
</script>

<template>
  <div class="container">
    <column-list :list="testData" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
