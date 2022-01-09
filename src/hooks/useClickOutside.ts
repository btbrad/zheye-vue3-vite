import { Ref, ref, onMounted, onUnmounted } from 'vue'

export default function (elementRef: Ref<HTMLElement | null>) {
  const isClickOutside = ref(false)

  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      if ((elementRef.value as HTMLElement).contains(e.target as HTMLElement)) {
        isClickOutside.value = false
      } else {
        isClickOutside.value = true
      }
    }
  }

  onMounted(() => {
    document.addEventListener('click', handler)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })

  return isClickOutside
}
