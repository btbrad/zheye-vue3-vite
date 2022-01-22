<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
import Footer from '@/components/Footer.vue'
import Form from '@/components/Form.vue'

const currentUser: UserProps = {
  isLogin: false,
  name: ''
}

</script>

<template>
  <div class="container">
    <global-header :user="currentUser" />
    <router-view />
    <!-- <Form /> -->
    <Footer />
  </div>
</template>

<style>
</style>
