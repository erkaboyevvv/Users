<template>
  <div class="max-w-4xl mx-auto p-6 mt-16">
    <div v-if="isLoading" class="flex justify-center items-center h-32">
      <svg
        class="animate-spin h-10 w-10 text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
        />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
      </svg>
    </div>
    <div v-else class="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4">
      <img class="w-24 h-24 rounded-full mx-auto" :src="user.avatar" alt="User Avatar" />
      <h1 class="text-3xl font-bold text-center">{{ user.name }}</h1>
      <h2 class="text-sm text-gray-500 text-center">Email: {{ user.email }}</h2>
      <h2 class="text-sm text-gray-500 text-center">Password: {{ user.password }}</h2>
      <h3 class="text-sm text-gray-700 text-center font-medium mt-2">Role: {{ user.role }}</h3>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import api from '../api/axios'

const route = useRoute()
const user = ref({})
const isLoading = ref(true)

onMounted(async () => {
  try {
    const response = await api.get(`users/${route.params.userId}`)
    user.value = response.data
  } catch (error) {
    console.error('Error fetching users:', error)
  } finally {
    isLoading.value = false
  }
})
</script>

<style lang="scss" scoped></style>
