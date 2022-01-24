<template>
  <div class="container">
    <global-header :user="currentUser" />
    <div class="main">
      <router-view />
    </div>
    <global-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import GlobalHeader, { UserProps } from "@/components/GlobalHeader.vue";
import GlobalFooter from "@/components/Footer.vue";
// import { useStore } from 'vuex'
import { useUserStore } from '@/stores/user'

export default defineComponent({
  name: "Layout",
  components: {
    GlobalHeader,
    GlobalFooter,
  },
  setup() {
    // const store = useStore()
    const user = useUserStore()
    // const currentUser: UserProps = computed(() => store.state.user)
    return {
      currentUser: user
    };
  },
});
</script>

<style scoped>
.main {
  min-height: calc(100vh - 70px - 69px - 24px);
}
</style>
