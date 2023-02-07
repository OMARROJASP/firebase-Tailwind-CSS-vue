<template>

  <div class="m-5 flex justify-center ">


    <div class=" bg-gray-100 border-2 rounded ">
      <h1 class="text-center text-3xl m-5"> Edit Sale</h1>
      <h1 class="mx-5">Cambie la cantidad de combustible en galones</h1>
      <p class="text-center text-3xl mt-10" v-if="databaseStore.loadingDoc">Loading doc...</p>
      <form @submit.prevent="handleSubmit" class="flex flex-col my-5 text-center" v-else>
        <input  type="text" class="border rounded m-5"   v-model="costumer">
        <button class="transform duration-500 hover:bg-yellow-500 hover:-translate-y-1 hover:scale-110 bg-green-400 w-20 md:w-64 mx-auto rounded" type="submit" :disabled="databaseStore.loadingDoc">
          Edit
         </button>
    
        <button   class=" bg-red-600 mx-auto text-center rounded w-32 md:px-10 my-5" @click="router.push('/')">
          Cancel
        </button>


    
      </form>

    </div>

  </div>

<!--
  /*

<div class="bg-gray-500 border-2 reounded flex justify-center text-center">
  <h1 class="text-center text-2xl">Edit</h1>
  <p class="text-center text-3xl mt-10" v-if="databaseStore.loadingDoc">Loading doc...</p>
  <form @submit.prevent="handleSubmit" v-else>
    <input type="text" class="border rounded" v-model-trim="costumer.cliente">
    <button type="submit" :disabled="databaseStore.loadingDoc">
      Edit
    </button>
  </form>

</div>
<div>
  <button @click="router.push('/')">Cancel</button>
</div>*/
-->

  
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useDatabaseStore } from "../stores/database";

const route = useRoute();
const router = useRouter();
const databaseStore = useDatabaseStore();
const costumer = ref("");


onMounted(async () => {
  costumer.value = await databaseStore.leerUrl(route.params.id);
});

const handleSubmit = async () => {
  console.log("vf")
  await databaseStore.updateUrl(route.params.id, costumer.value);
};

const edit = ()=>{
  router.push('/')
  alert("No se realizo cambios")
}
</script>

