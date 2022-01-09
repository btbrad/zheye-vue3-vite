<template>
  <div class="dropdown" ref="dropdownRef">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">{{ title }}</a>
    <ul class="dropdown-menu" :style="{display: 'block'}" v-if="openRef">
      <slot />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, watch } from 'vue'
import useClickOutside from '@/hooks/useClickOutside'

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
    const isClickOutside = useClickOutside(dropdownRef)

    watch(isClickOutside, (val) => {
      if (val && openRef.value) {
        openRef.value = false
      }
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