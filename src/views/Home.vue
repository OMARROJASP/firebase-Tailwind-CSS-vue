<template>
<h1>Home</h1>
  <h2 v-if="dataBaseStore.loadingDoc">Loading ...</h2>
  <div v-else>
    <form @submit.prevent="handleSubmit">
      <h2>Sales Data</h2>
      <input placeholder="Enter costumer"  v-model.trim="cliente">
      <input type="number" placeholder="Enter gallons" v-model.trim="galones">
      <input type="datetime-local" v-model.trim="fecha" >
      <select name="type" v-model.trim="tipo">
        <option>Petroleo</option>
        <option>G-90</option>
        <option>G-95</option>
      </select>

      <button type="submit" >Save</button>
    </form>
    <ul v-for="data in dataBaseStore.documents">
      <li>
        {{data.cliente}}
      </li>
      <li>
        {{data.tipo}}
      </li>

      <li >
        {{data.fecha}}
      </li>
      <li>
        {{data.galones}}
      </li>
      <li>
        {{data.id}}
      </li>
      <button @click="dataBaseStore.deleteUrl(data.id)">Delete</button>
      <button @click="router.push(`/edit/${data.id}`)"  >Edit</button>

    </ul>




  </div>
</template>



<script setup>
import {useDatabaseStore} from "../database";
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
  await dataBaseStore.addUrl(cliente.value, fecha.value, galones.value, tipo.value)
}

</script>
