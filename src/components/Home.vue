<template>
  <div class="home">
    <uploader 
      action="http://localhost:80" 
      :beforeUpload="beforeUpload" 
      @file-uploaded="onFileUploaded" 
      @file-uploaded-error="onFileUploadedError"
      class="d-flex align-items-center justify-content-center bg-light text-secondary w-100 my-4"
    >
      <h2>点击上传</h2>
      <template #loading>
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </template>
      <template #uploaded="slotProps">
        <img :src="slotProps.uploadedData.data.url" width="500"/>
      </template>
    </uploader>
    <button class="btn btn-primary" @click="modalVisibleRef = true">模态框</button>
    <modal title="测试标题" :visible="modalVisibleRef" @modal-on-close="onModalClose" @modal-on-confirm="onModalConfirm">
      <template #content>
        <h2>确认删除这篇文章？</h2>
      </template>
    </modal>
    <column-list :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import ColumnList from "@/components/ColumnList.vue";
// import { useStore } from "vuex";
// import { GlobalDataProps } from '@/store/index'
import { useColumnStore } from '@/stores/column'
import { storeToRefs } from 'pinia'
import Uploader from '@/components/Uploader.vue'
import createMessage from '@/components/createMessage'
import { beforeUploadCheck } from '@/utils'
import Modal from '@/components/Modal.vue'

export default defineComponent({
  name: "Home",
  components: {
    ColumnList,
    Uploader,
    Modal
  },
  setup() {
    // const store = useStore<GlobalDataProps>();
    const column = useColumnStore()
    const modalVisibleRef = ref(false)

    // const list = computed(() => store.state.columns)
    const { columns: list } = storeToRefs(column)

    const beforeUpload = (file: File) => {
      const isJPG = beforeUploadCheck(file, ['image/jpeg'])
      if (!isJPG.passed) {
        createMessage('只能上传JPG格式的图片', 'error')
      }
      return isJPG.passed
    }

    const onFileUploaded = (rawData: any) => {
      createMessage('上传成功', 'success')
    }

    const onFileUploadedError = (error: any) => {
      createMessage('上传失败', 'error')
    }

    const onModalClose = () => {
      modalVisibleRef.value = false
      console.log('模态框关闭')
    }

    const onModalConfirm = () => {
      modalVisibleRef.value = false
      console.log('模态框确认')
    }

    return {
      list,
      beforeUpload,
      onFileUploaded,
      onFileUploadedError,
      modalVisibleRef,
      onModalClose,
      onModalConfirm
    };
  },
});
</script>

<style>
.file-upload-container {
  height: 200px;
  cursor: pointer;
}
.file-upload-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>