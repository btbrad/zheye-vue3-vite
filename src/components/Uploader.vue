<template>
  <div class="file-uploader">
    <button class="btn btn-primary" @click.prevent="triggerUpload">
      <span v-if="fileStatus === 'loading'">正在上传...</span>
      <span v-else>点击上传</span>
    </button>
    <input type="file" class="file-input d-none" ref="fileInput" @change.prevent="handleFileChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import Axios from 'axios'

type UploaderStatus = 'ready' | 'loading' | 'success' | 'error'

type CheckFunction = (file: File) => boolean

export default defineComponent({
  props: {
    action: {
      type: String,
      required: true
    },
    beforeUpload: {
      type: Function as PropType<CheckFunction>
    }
  },
  emits: ['file-uploaded', 'file-uploaded-error'],
  setup (props, context) {
     const fileInput = ref<null | HTMLInputElement>(null)
    const fileStatus = ref<UploaderStatus>('ready')
    const triggerUpload = () => {
      if (fileInput.value) {
        fileInput.value.click()
      }
    }
    const handleFileChange = (e: Event) => {
      const currentTarget = e.target as HTMLInputElement
      if (currentTarget.files) {
        const files = Array.from(currentTarget.files)
        // 校验文件是否符合要求
        if (props.beforeUpload) {
          const result = props.beforeUpload(files[0])
          if (!result) {
            return
          }
        }
        fileStatus.value = 'loading'
        const formData = new FormData()
        formData.append('file', files[0])
        Axios.post(props.action, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then((resp: any) => {
          console.log(resp.data)
          fileStatus.value = 'success'
          context.emit('file-uploaded', resp.data)
        }).catch((e) => {
          fileStatus.value = 'error'
          context.emit('file-uploaded-error', { e })
        }).finally(() => {
          if (fileInput.value) {
            fileInput.value = null
          }
        })
      }
    }
    return {
      fileInput,
      triggerUpload,
      fileStatus,
      handleFileChange
    }
  }
})
</script>
