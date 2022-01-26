<template>
  <div class="column-detail-page w-75 mx-auto">
    <loader />
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center">
      <div class="col-3 text-center">
        <img :src="column.avatar" :alt="column.title" class="rounded-circle" />
      </div>
      <div class="col-9">
        <h4>{{ column.title }}</h4>
        <p class="text-muted">{{ column.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router' 
import { testData, testPosts, ColumnProps, PostProps } from '@/testData'
import Loader from '@/components/Loader.vue'

export default defineComponent({
  components: {
    Loader
  },
  setup() {
    const route = useRoute()
    const currentId = +route.params.id
    const column = testData.find((c: ColumnProps ) => c.id === currentId)
    const list = testPosts.filter((p: PostProps) => p.columnId === currentId)
    return {
      column,
      list
    }
  }
})
</script>
