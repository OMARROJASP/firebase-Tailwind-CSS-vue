<template>
  <div>
    <h1>Edit</h1>
    <p v-if="databaseStore.loadingDoc">Loading doc...</p>
    <form @submit.prevent="handleSubmit" v-else>
      <input type="text" placeholder="costumer" v-model="costumer">
      <button type="submit" :disabled="databaseStore.loadingDoc">
        Edit
      </button>
    </form>

  </div>
  <div>
    <button @click="router.push('/')">Cancel</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useDatabaseStore } from "../database";

const route = useRoute();
const router = useRouter();
const databaseStore = useDatabaseStore();
const costumer = ref("");

onMounted(async () => {
  costumer.value = await databaseStore.leerUrl(route.params.id);
});

const handleSubmit = async () => {
  await databaseStore.updateUrl(route.params.id, costumer.value);
};
</script>