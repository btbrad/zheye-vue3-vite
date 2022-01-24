<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateInput, { RulesProp } from './ValidateInput.vue'
import ValidateForm from './ValidateForm.vue'
import { useRouter } from 'vue-router'
// import { useStore } from 'vuex'
import { useUserStore } from '@/stores/user'

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
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup() {

    // const store = useStore()
    const user = useUserStore()

    const router = useRouter()
    const emailVal = ref('')
    const passwordVal = ref('')

    const onFormSubmit = (result: Boolean) => {
      console.log('提交表单', result)
      if (result) {
        // store.commit('login')
        user.login({ name: 'Brad' })
        router.push('/home')
      }
    }

    return {
      emailRules,
      emailVal,
      passwordRules,
      passwordVal,
      onFormSubmit
    }

  }
})

</script>

<template>
  <validate-form @form-submit="onFormSubmit">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
      <validate-input type="text" :rules="emailRules" v-model="emailVal" placeholder="请输入邮箱" />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">密码</label>
      <validate-input type="password" :rules="passwordRules" v-model="passwordVal" placeholder="请输入密码" />
    </div>
    <template #submit>
      <span class="btn btn-danger">Submit</span>
    </template>
  </validate-form>
</template>      
