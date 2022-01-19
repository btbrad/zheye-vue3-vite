<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateInput, { RulesProp } from './ValidateInput.vue'



const emailRules: RulesProp = [
  {
    type: 'required', message: '电子邮箱地址不能为空'
  },
  {
    type: 'email', message: '请输入正确的电子邮箱格式'
  }
]

const passwordRules: RulesProp = [
  {
    type: 'required', message: '密码不能为空'
  }
]

export default defineComponent({
  name: 'Form',
  components: {
    ValidateInput
  },
  setup() {

    const emailVal = ref('')
    const passwordVal = ref('')

    return {
      emailRules,
      emailVal,
      passwordRules,
      passwordVal
    }

  }
})

</script>

<template>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
      <validate-input type="text" :rules="emailRules" v-model="emailVal" placeholder="请输入邮箱" />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">密码</label>
      <validate-input type="password" :rules="passwordRules" v-model="passwordVal" placeholder="请输入密码" />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>      
