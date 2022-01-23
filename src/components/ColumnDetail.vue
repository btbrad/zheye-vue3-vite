<template>
  <h1>{{ route.params.id }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router' 

export default defineComponent({
  setup() {
    const route = useRoute()

    return {
      route
    }
  }
})
</script>
