<template>
<div>
  <h1 class="d-flex justify-content-center ">App</h1>
  <div v-if="!userStore.userData">

    <router-link to="login"> Login </router-link>
    <router-link to="register">Register</router-link>
  </div>
  <div v-else-if="userStore.userData">
    <router-link  type="submit" to="/">Home</router-link>
    <button   @click="userStore.signOutUser" type="submit">Sign Out</button>
  </div>



  <div v-if="userStore.loadingUser">
    <h2>Loading ...</h2>
  </div>
  <router-view></router-view>
</div>
</template>

<script setup>
import {useUserStore} from "./stores/user";

const userStore =  useUserStore();

</script>