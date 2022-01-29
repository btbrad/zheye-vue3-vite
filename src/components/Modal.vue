<template>
  <teleport to="#modal">
    <div v-if="visible" class="modal d-block" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click.prevent="onModalClose"></button>
          </div>
          <div class="modal-body">
            <slot name="content">
              <p>Modal body text goes here.</p>
            </slot>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click.prevent="onModalClose">取消</button>
            <button type="button" class="btn btn-primary" @click.prevent="onModalConfirm">确认</button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useDOMCreate from '@/hooks/useDOMCreate'

export default defineComponent({
  name: 'modal',
  props: {
    title: {
      type: String
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ['modal-on-close', 'modal-on-confirm'],
  setup (props, context) {
    useDOMCreate('modal')
    const onModalClose = () => {
      context.emit('modal-on-close')
    }
    const onModalConfirm = () => {
      context.emit('modal-on-confirm')
    }
    return {
      onModalClose,
      onModalConfirm
    }
  }
})
</script>
