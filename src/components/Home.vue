<template>
  <column-list :list="list" />
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import ColumnList from "@/components/ColumnList.vue";
import { useStore } from "vuex";
import { GlobalDataProps } from '@/store/index'

export default defineComponent({
  name: "Home",
  components: {
    ColumnList,
  },
  setup() {
    const store = useStore<GlobalDataProps>();

    const list = computed(() => store.state.columns)

    return {
      list
    };
  },
});
</script>
