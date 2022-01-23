<template>
  <div class="row">
    <div class="col-4" v-for="column in columnList" :key="column.id">
      <div class="card h-100 shadow-sm mb-4">
        <div class="card-body text-center">
          <img class="round-circle border border-light w-25 my-3" :src="column.avatar" :alt="column.title">
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text" style="text-align: left;">{{ column.description }}</p>
          <router-link :to="`/column/${column.id}`" class="btn btn-outline-primary">进入专栏</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import Default from '@/assets/default.jpeg'

export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup(props) {
    const columnList = computed(() => (
      props.list.map(col => {
        if (!col.avatar) {
          col.avatar = Default
        }
        return col
      })
    ))

    return {columnList}
  }
})
</script>

<style scoped>

</style>