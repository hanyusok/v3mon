<script setup>
import axios from 'axios'
import { ref } from 'vue'

const API_URL="http://192.168.0.14:5050/"
const users = ref({})
axios.get(API_URL + 'users').then((response) => {
  users = response.data
})
</script>

<template>
  <main>
    <h1>User lists</h1>
    <p>{users}</p>
  </main>
</template>
