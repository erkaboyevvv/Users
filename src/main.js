import './assets/main.css'

import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

const app = Vue.createApp(App)
app.use(router, VueAxios, axios)

app.mount('#app')
