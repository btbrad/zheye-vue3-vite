<template>
  <column-list :list="list" />
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import ColumnList from "@/components/ColumnList.vue";
// import { useStore } from "vuex";
// import { GlobalDataProps } from '@/store/index'
import { useColumnStore } from '@/stores/column'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: "Home",
  components: {
    ColumnList,
  },
  setup() {
    // const store = useStore<GlobalDataProps>();
    const column = useColumnStore()

    // const list = computed(() => store.state.columns)
    const { columns: list } = storeToRefs(column)

    return {
      list
    };
  },
});
</script>
