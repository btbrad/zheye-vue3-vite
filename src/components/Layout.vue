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
import { defineComponent, computed, onMounted } from "vue";
import GlobalHeader, { UserProps } from "@/components/GlobalHeader.vue";
import GlobalFooter from "@/components/Footer.vue";
// import { useStore } from 'vuex'
import { useUserStore } from '@/stores/user'
import Message from '@/components/Message.vue'
import createMessage from '@/components/createMessage'

export default defineComponent({
  name: "Layout",
  components: {
    GlobalHeader,
    GlobalFooter,
    Message
  },
  setup() {
    // const store = useStore()
    const user = useUserStore()
    // const currentUser: UserProps = computed(() => store.state.user)
    onMounted(() => {
      createMessage('出错了(测试)', 'error')
    })
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
