<template>
  <column-list :list="testData" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList from '@/components/ColumnList.vue'
import { testData } from '@/testData'

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