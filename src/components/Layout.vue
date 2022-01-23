<template>
  <div class="container">
    <global-header :user="currentUser" />
    <router-view />
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