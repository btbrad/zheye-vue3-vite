<template>
  <div class="home">
    <uploader action="http://localhost:80" :beforeUpload="beforeUpload" @file-uploaded="onFileUploaded" @file-uploaded-error="onFileUploadedError">
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
    <column-list :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import ColumnList from "@/components/ColumnList.vue";
// import { useStore } from "vuex";
// import { GlobalDataProps } from '@/store/index'
import { useColumnStore } from '@/stores/column'
import { storeToRefs } from 'pinia'
import Uploader from '@/components/Uploader.vue'
import createMessage from '@/components/createMessage'

export default defineComponent({
  name: "Home",
  components: {
    ColumnList,
    Uploader
  },
  setup() {
    // const store = useStore<GlobalDataProps>();
    const column = useColumnStore()

    // const list = computed(() => store.state.columns)
    const { columns: list } = storeToRefs(column)

    const beforeUpload = (file: File) => {
      const isJPG = file.type === 'image/jpeg'
      if (!isJPG) {
        createMessage('只能上传JPG格式的图片', 'error')
      }
      return isJPG
    }

    const onFileUploaded = (rawData: any) => {
      createMessage('上传成功', 'success')
    }

    const onFileUploadedError = (error: any) => {
      createMessage('上传失败', 'error')
    }

    return {
      list,
      beforeUpload,
      onFileUploaded,
      onFileUploadedError
    };
  },
});
</script>
