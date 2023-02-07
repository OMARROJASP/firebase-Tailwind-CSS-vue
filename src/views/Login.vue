<template>


  <div class="m-5 flex justify-center">
   
    
   
  
    <div class="flex  flex-col justify-center text-center border-2 rounded  ">
      <div class="flex justify-center my-5">
        <img class=" object-contain md:object-scale-down  rounded-full" src="../img/logo_size_invert.jpg">
      </div>
     
      <h1 class="text-2xl "> WELCOME TO </h1>
      <h1 class="text-6xl text-orange-700"> RUKANAS </h1>

      <form @submit.prevent="handleSubmit" class="  m-2 p-4 rounded" >
        <div >
          <input class="text-center border-2 py-2  md:px-20  lg:px-32  md:w-full rounded-full my-5 " type="email"
                 placeholder="Enter your email" v-model.trim="email" >
        </div>
        <div>
          <input class="text-center border-2 my-5 md:px-20  lg:px-32  md:w-full py-2 rounded-full" type="password"
               placeholder="Enter your password" v-model.trim="password">
        </div>
        <div >
          <button class="text-center text-white border rounded-full w-24  md:w-full py-2 bg-red-600"  type="submit">Log In</button>
        </div>
        <div >
            <p class="my-5">Don't have an account? <span class="text-orange-700 font-semibold">Sign Up Now</span></p>
        </div>

      </form>

      <p class="my-3">Or</p>


      <div class="text-center">
        <p class="text-sm">Continue with social media</p>
      </div>
 
      <div class="flex justify-center h-40">
        <div class="my-5">
        <svg class="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
       </div>
        <div class="my-5 mx-4">
        <svg class="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M17.788 5.108A9 9 0 1021 12h-8" /></svg>
       </div>
        <div class="my-5">
        <svg class="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
        </div>
      </div>

<!--

  <div class="grid grid-cols-3 gar-2 ">
        <div class=" "> <hr class="self-center"> </div>
        <div> <p class="bg-green-500 my-5">Or</p></div>
        <div> <hr class="mx-5 py-5"></div>
       </div>


         <div class="login text-center">
        <h1 class="m-5 text-xl text-white">LOGIN</h1> 

       <h1  class="m-5 text-xl"> RUKANAS </h1>
       <h2>General services S.R.L</h2>
       <h1>RUKANAS SERVICIOS GENERALES SOCIEDAD
            COMERCIAL DE RESPONSABILIDAD LIMITADA
      </h1>
      <h1>RUC 20545398355</h1>
      <h1>LUIS PARDO N° 1195 - SAN MARTÍN DE PORRES
      LIMA - LIMA , LUCANAS , LUCANAS - AYACUCHO</h1>
      <h1>D. Comercial: Av. El Sol s/n Lucanas - Lucanas -
      Ayacucho Km. 129 Panamericana Nazca - Cuzco</h1>
      <h1>Central telefónica: 941337902</h1>
      <h1>Email: rukanasmrg@hotmail.com</h1>
      <h1>ESTACION DE SERVICIO RUKANAS: GASOLINA,
        PETROLEO, LUBRICANTES</h1>
      </div>
-->
      
      </div>
  
 

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
//"bg-cover bg-center rounded-l-md"
//style="background-image: url('https://www.courroie-distribution.fr/media/original_images/station_service.jpeg')"

</script>
<style>
.redd{
  background-color: #f80000;
}
</style>


