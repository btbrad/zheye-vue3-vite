<template>
  <div class="home">
    <uploader action="http://localhost:80" />
    <column-list :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import ColumnList from "@/components/ColumnList.vue";
// import { useStore } from "vuex";
// import { GlobalDataProps } from '@/store/index'
import { useColumnStore } from '@/stores/column'
import { storeToRefs } from 'pinia'
import Uploader from '@/components/Uploader.vue'

export default defineComponent({
  name: "Home",
  components: {
    ColumnList,
    Uploader
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
