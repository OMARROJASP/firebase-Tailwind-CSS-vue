<template>
<h1>Register</h1>

  <div>
    <form @submit.prevent="handleSubmit">
      <div><input type="email" placeholder="Enter your email" v-model.trim="email" ></div>
      <div><input type="password" placeholder="Enter your password" v-model.trim="password"></div>
      <div><input type="password" placeholder="Repeat your password" v-model.trim="repassword"></div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup>
import {useUserStore} from "../stores/user";
import {reactive, ref} from "vue";


const userStore = useUserStore()


const email = ref("omarrojas@gmail.com")
const password = ref("123123")
const repassword = ref("123123")
 const handleSubmit = () =>{
   if (!email.value || password.value.length < 6) {
     alert("ingresa los campos");
   }

   if( password.value !== repassword.value)
   {
     alert("Repeat the password");
   }  userStore.registerUser(email.value, password.value)
 }


</script>

