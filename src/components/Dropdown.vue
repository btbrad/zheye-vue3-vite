<template>
  <div class="dropdown" ref="dropdownRef">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">{{ title }}</a>
    <ul class="dropdown-menu" :style="{display: 'block'}" v-if="openRef">
      <slot />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

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
    const dropdownRef = ref<null | HTMLElement>(null)
    const toggleOpen = () => {
      openRef.value = !openRef.value
    }

    const handler = (e: MouseEvent) => {
      if (dropdownRef.value) {
        if(!dropdownRef.value.contains(e?.target as HTMLElement) && openRef.value) {
          openRef.value = false
        } 
      }
    }

    onMounted(() => {
      document.addEventListener('click', handler)
    })

    onUnmounted(() => {
      document.removeEventListener('click', handler)
    })

    return {
      openRef,
      toggleOpen,
      dropdownRef
    }
  }
})
</script>

<style>

</style>