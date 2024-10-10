<template>
  <div
    class="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto cursor-pointer"
    @click="goToUserPage"
  >
    <div class="flex flex-col items-center justify-center">
      <img
        v-if="user.avatar"
        class="w-24 h-24 rounded-full flex items-center justify-center"
        :src="user.avatar"
        alt="User Avatar"
      />
      <div v-else class="w-24 h-24 flex items-center justify-center rounded-full bg-gray-200">
        <svg class="w-12 h-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-10 1.67-10 5v2h20v-2c0-3.33-6.69-5-10-5z"
          />
        </svg>
      </div>
    </div>
    <h1 class="text-xl font-semibold text-center mt-4">{{ user.name }}</h1>
    <h2 class="text-sm text-gray-500 text-center">{{ user.email }}</h2>
    <h3 class="text-sm text-gray-700 text-center font-medium mt-2">Role: {{ user.role }}</h3>
  </div>
</template>

<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true,
    default: () => ({
      avatar: '',
      name: '',
      email: '',
      role: ''
    })
  }
})

import { useRouter } from 'vue-router'

const router = useRouter()

const goToUserPage = () => {
  router.push(`/users/${props.user.id}`)
}
</script>

<style lang="scss" scoped></style>
