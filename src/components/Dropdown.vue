<template>
  <div class="dropdown">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">{{ title }}</a>
    <ul class="dropdown-menu" :style="{display: 'block'}" v-if="openRef">
      <li><a class="dropdown-item" href="#">新建文章</a></li>
      <li><a class="dropdown-item" href="#">编辑资料</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const openRef = ref(false)
    const toggleOpen = () => {
      openRef.value = !openRef.value
    }
    return {
      openRef,
      toggleOpen
    }
  }
})
</script>

<style>

</style>