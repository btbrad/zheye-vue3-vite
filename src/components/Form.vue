<script lang="ts">
import { defineComponent, reactive } from 'vue'

const emailRegex = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/

export default defineComponent({
  name: 'Form',
  setup() {

    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })

  const validateEmail = () => {
    if (emailRef.val.trim() === '') {
      emailRef.error = true
      emailRef.message = 'can not be empty'
    } else if (!emailRegex.test(emailRef.val)) {
      emailRef.error = true
      emailRef.message = 'invalid email'
    }
  }

  return {
    emailRef,
    validateEmail
  }

  }
})

</script>

<template>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input v-model="emailRef.val" @blur="validateEmail" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      <div class="form-text" v-if="emailRef.error">{{ emailRef.message }}</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>      
