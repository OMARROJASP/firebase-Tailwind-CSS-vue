<template>

<div class=" flex justify-around items-center">
  <h1 class="text-center pt-5  m-5 text-2xl">Home</h1>
  <button  class=" p-2 m-1 bg-yellow-500 rounded mx-5" type="submit" @click="router.push(`/perfil`)">Perfil</button>
</div>
  <h2  class="text-center text-3xl mt-10" v-if="dataBaseStore.loadingDoc">Loading ...</h2>
  <div v-else>
    <div class="grid grid-cols-3 gap-2 ">
      <div class="  text-center border  bg-gray-100 rounded">
        <form class="flex flex-col" @submit.prevent="handleSubmit">
          <h2 class="text-center ">Sales Data</h2>
          <input class="border my-2 mx-5 rounded" placeholder="Enter costumer"  v-model.trim="cliente">
          <input class="border my-2 mx-5 rounded" type="number" placeholder="Enter gallons" v-model.trim="galones">
          <input class="border my-2 mx-5 rounded" type="datetime-local" v-model.trim="fecha" >
          <select class="border my-2 mx-5 rounded"  name="type" v-model.trim="tipo">
            <option value="">Selecciona una opción</option>
            <option>Petroleo</option>
            <option>G-90</option>
            <option>G-95</option>
            <button class="transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ...">
  Hover me
</button>
          </select>

          <button type="submit" class="bg-red-500 rounded m-16 py-3">Save</button>
        </form>


      </div>
      <div class="bg-gray-100 border col-span-2 rounded px-4">

        <ul v-for="data in dataBaseStore.documents" class="my-4">
          <div class="border-2 rounded ">
            <li class="mt-4 ml-5">
            - Cliente: {{data.cliente}}
          </li>
          <li class=" ml-5">
            - tipo de producto: {{data.tipo}}
          </li>

          <li class=" ml-5">
            - fecha: {{data.fecha}}
          </li>
          <li class=" ml-5">
             - Cantidad de producto: {{data.galones}} gallones
          </li>
         
          <button class="redd p-3 border   rounded mt-6 mx-5" @click="dataBaseStore.deleteUrl(data.id)">Delete</button>
          <button class="edit p-3 border rounded mt-6 px-6"  @click="router.push(`/edit/${data.id}`)"  >Edit</button>
            <hr class="my-2 bg-black rounded border-2">
          </div>
        </ul>
      </div>

    </div>



  </div>
</template>



<script setup>
import {useDatabaseStore} from "../stores/database";
import {useUserStore} from "../stores/user";
import {onBeforeMount, ref} from "vue";
import {useRouter} from "vue-router"

const dataBaseStore = useDatabaseStore();
const userStore = useUserStore();
const router = useRouter();

onBeforeMount(async () => {

  await dataBaseStore.getUrls();
});


const cliente = ref("");
const fecha = ref("");
const galones = ref("");
const tipo = ref("");



const getDate=(value)=> {
  const event = new Date(value);
  console.log(event.toString());
}



const handleSubmit= async()=>{
  
  if(!cliente.value  ||   !fecha.value
     || (galones.value<=0 || !galones.value)
     || !tipo ){
    alert("llenar datos correctamente")
    cliente.value= ""
    galones.value=""
    fecha.value=""
    tipo.value=""
  }else{
    await dataBaseStore.addUrl(cliente.value, fecha.value, galones.value, tipo.value)
    cliente.value= ""
    galones.value=""
    fecha.value=""
    tipo.value=""
  }

   
}


</script>
<style>
.edit{
  background-color: #eef800;
}
</style>