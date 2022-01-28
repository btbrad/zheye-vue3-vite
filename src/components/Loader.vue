<template>
  <teleport to="#loading">
    <div class="d-flex justify-content-center align-items-center h-100 loading-container">
      <div class="loading-content">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useDOMCreate from '@/hooks/useDOMCreate'

export default defineComponent({
  props: {
    text: {
      type: String
    },
    background: {
      type: String
    }
  },
  setup () {
    useDOMCreate('loading')
  }
})
</script>

<style>
.loading-container {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, .5);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
}
.loading-content {
  text-align: center;
}
</style>
