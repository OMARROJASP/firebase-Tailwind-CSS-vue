<template>
  <h1>Login</h1>

  <div>
    <form @submit.prevent="handleSubmit">
      <div><input type="email" placeholder="Enter your email" v-model.trim="email" ></div>
      <div><input type="password" placeholder="Enter your password" v-model.trim="password"></div>
     <button type="submit">Log In</button>
    </form>
  </div>
</template>

<script setup>
import {useUserStore} from "../stores/user";
import {ref} from "vue";

const userStore = useUserStore()

const email = ref("omarrojas@gmail.com")
const password = ref("123123")
const handleSubmit = () =>{
  if (!email.value || password.value.length < 6) {
    alert("ingresa los campos");
  }

  userStore.loginUser(email.value, password.value)
}


</script>

