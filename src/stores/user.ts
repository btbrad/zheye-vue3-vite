import { defineStore } from 'pinia'

interface UserProps {
  isLogin: boolean
  name?: string
  id?: number
}

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      isLogin: false,
      name: '',
    }
  },
  actions: {
    login(state: UserProps) {
      this.isLogin = true
      this.name = state.name as string
    },
    logout() {
      this.isLogin = false
      this.name = ''
    },
  },
})
