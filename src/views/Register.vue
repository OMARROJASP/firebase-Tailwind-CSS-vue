<template>
  <div class="bg-cover bg-center"
       style="background-image: url('https://www.gilbarco.com/la/sites/gilbarco.com.la/files/article/images/montar-posto-de-gasolina-1.jpg')">
    <h1 class="text-center pt-5  m-5 text-2xl">Register</h1>

    <div class="flex  justify-center text-center rounded mt-30 mb-10" >
      <form @submit.prevent="handleSubmit" class="bg-orange-600 m-2 p-4 rounded" >
        <div >
          <input class="text-center border rounded my-5 " type="email"
                 placeholder="Enter your email" v-model.trim="email" >
        </div>
        <div>
          <input class="text-center border my-5 rounded" type="password"
                 placeholder="Enter your password" v-model.trim="password">
        </div>
        <div>
          <input class="text-center border my-5 rounded" type="password"
                 placeholder="Repeat your password" v-model.trim="password">
        </div>
        <div class="mx-auto">
          <button class="text-center border rounded my-5  bg-gray-400 px-3"  type="submit">Log In</button>
        </div>
      </form>


    </div>

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

