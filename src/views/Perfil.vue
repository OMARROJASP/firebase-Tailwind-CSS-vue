<template>
    <div class="text-center  my-10">
  <h1 class="text-4xl  my-10">My profile</h1>
  <form>
    <h1 > Tu correo (no modificable)</h1>
  <input class="bg-gray-400 border-2" />
  <h1 class=" "> Ingrese tu Nickname</h1>
  <input class=" border-2"/>
  </form>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useDatabaseStore } from "../stores/database";

const route = useRoute();
const router = useRouter();


</script>
