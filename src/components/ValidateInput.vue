<template>
  <div class="validate-input-container pb-3">
    <input 
      class="form-control"
      :class="{'is-invalid': inputRef.error, 'is-valid': !inputRef.error}"
      v-model="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
      v-bind="$attrs"
    />
    <span v-if="inputRef.error" class="invalid-feedback">{{ inputRef.message }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, onMounted } from 'vue'
import { emitter } from './ValidateForm.vue'

const emailRegex = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/

interface RuleProp {
  type: 'required' | 'email';
  message: string;
}

export type RulesProp = RuleProp[]

export default defineComponent({
  inheritAttrs: false,
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  setup(props, context) {

    onMounted(() => {
      emitter.emit('form-item-created', inputRef.val)
    })

    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })
    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every((rule: RuleProp) => {
          let passed = true
          inputRef.message = rule.message 
          switch (rule.type) {
            case 'required':
              passed = !(inputRef.val.trim() === '')
              break
            case 'email':
              passed = emailRegex.test(inputRef.val)
              break
            default: 
              break
          }
          return passed
        })  
        inputRef.error = !allPassed
        return allPassed
      }
      return true
    }

    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }

    return {
      inputRef,
      validateInput,
      updateValue
    }
  }
})
</script>
