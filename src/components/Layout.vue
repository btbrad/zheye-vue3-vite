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
import { defineComponent } from 'vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
import GlobalFooter from '@/components/Footer.vue'

export default defineComponent({
  name: "Layout",
  components: {
    GlobalHeader,
    GlobalFooter
  },
  setup() {
    const currentUser: UserProps = {
      isLogin: false,
      name: ''
    }
    return {
      currentUser
    }
  }
})
</script>

<style scoped>
.main {
  min-height: calc(100vh - 70px - 69px - 24px);
}
</style>