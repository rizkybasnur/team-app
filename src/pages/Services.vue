<template>
  <div
    class="w-full flex justify-center items-center"
    style="margin-top: 200px"
  >
    <div class="">
      <div>Nama: {{ taskStore.auth.displayName }}</div>
      <div>Email: {{ taskStore.auth.email }}</div>
      <img :src="taskStore.auth.photoURL" alt="google profile picture" />
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "../stores/TaskStore";
import { onMounted } from "vue";

onMounted(() => {
  let temp = JSON.parse(localStorage.getItem("auth"));
  taskStore.saveAuth(temp);
});

const taskStore = useTaskStore();
</script>

<style scoped></style>
