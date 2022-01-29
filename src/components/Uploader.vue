<template>
  <div class="file-uploader">
    <div class="file-upload-container" @click.prevent="triggerUpload">
      <slot v-if="fileStatus === 'loading'" name="loading">
        <button class="btn btn-primary" disabled>正在上传...</button>
      </slot>
      <slot v-if="fileStatus === 'success'" name="uploaded" :uploadedData="uploadedDataRef" >
        <button class="btn btn-primary">上传成功</button>
      </slot>
      <slot v-else name="default">
        <button class="btn btn-primary">点击上传</button>
      </slot>
    </div>
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
    const uploadedDataRef = ref()
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
          uploadedDataRef.value = resp.data
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
      handleFileChange,
      uploadedDataRef
    }
  }
})
</script>
