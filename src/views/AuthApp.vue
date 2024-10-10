<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div
      v-if="alreadyLoggedIn"
      class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center"
    >
      <h2 class="text-2xl font-bold mb-4">You are already logged in!</h2>
      <p class="text-gray-600">Redirecting to the home page...</p>
    </div>
    <div v-else class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-8">Login</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="email" class="block text-gray-700">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          @click="submitForm"
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all duration-300"
        >
          {{ login }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import api from '../api/axios'

const login = ref('Login')
const email = ref('john@mail.com')
const password = ref('changeme')
const alreadyLoggedIn = ref(false)
const router = useRouter()

onMounted(() => {
  const accessToken = localStorage.getItem('access_token')
  if (accessToken) {
    alreadyLoggedIn.value = true
    setTimeout(() => {
      router.push('/')
    }, 2000) // 2 soniyadan keyin yo'naltirish
  }
})

const submitForm = async () => {
  login.value = 'Logging in...'
  try {
    const response = await api.post('/auth/login', {
      email: email.value,
      password: password.value
    })

    const { access_token, refresh_token } = response.data

    console.log(access_token, refresh_token)

    const userProfileData = await api.get('/auth/profile', {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })

    console.log(userProfileData.data)

    const { role } = userProfileData.data

    localStorage.setItem('access_token', access_token)
    localStorage.setItem('refresh_token', refresh_token)
    localStorage.setItem('user_role', role)

    router.push('/users')
  } catch (error) {
    console.error('Login failed:', error)
  }
}
</script>

<style scoped></style>
