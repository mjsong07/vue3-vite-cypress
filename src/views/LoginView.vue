<template>
  <div id="app">
    <h1>Login Form</h1> 
    <p class="msg">登录的信息：{{ msg }}</p>
    <form @submit.prevent="handleSubmit">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" >
      <br>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" >
      <br>
      <button type="submit">Login</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const username = ref('')
const password = ref('')
const msg = ref('')
const handleSubmit = () => {
  if (username.value === '' && password.value === '') {
    msg.value = '请输入'
  }else if (username.value === 'testuser' && password.value === 'password123') {
    console.log(`Logging in as ${username.value}`);
    msg.value = '登录成功'
  } else {
    msg.value = '登录失败'
  }

}
</script>