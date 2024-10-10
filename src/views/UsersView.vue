<template>
  <div class="max-w-4xl mx-auto p-6">
    <div v-if="!isProfileView">
      <h1 class="text-3xl font-bold mb-6 text-center">Users</h1>
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
      <div v-else-if="userList.data.length === 0" class="text-center text-gray-500">
        <p>No users found.</p>
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div v-for="user in userList.data" :key="user.id">
          <UserCard :user="user"> </UserCard>
        </div>
      </div>
    </div>
    <router-view v-else></router-view>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import UserCard from '@/components/UserCard.vue'
const userList = ref([])
import api from '../api/axios'

const route = useRoute()

const isProfileView = ref(false)

const isLoading = ref(true)

watch(() => {
  isProfileView.value = route.params.userId !== undefined
})

onMounted(async () => {
  try {
    userList.value = await api.get('users')
    console.log(userList.value.data[0].avatar)
  } catch (error) {
    console.error('Error fetching users:', error)
  } finally {
    isLoading.value = false
  }
})
</script>

<style lang="scss" scoped></style>
