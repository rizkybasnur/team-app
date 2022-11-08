<template>
  <div
    class="w-full flex justify-center items-center"
    style="margin-top: 200px"
  >
    <div class="text-center flex flex-col gap-4">
      <div>Create an account</div>
      <p>
        <input
          type="text"
          placeholder="email"
          v-model="email"
          class="border rounded px-4 py-2"
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="password"
          v-model="password"
          class="border rounded px-4 py-2"
        />
      </p>
      <p><button @click="register">Submit</button></p>
      <p><button @click="signInWithGoogle">Sign in with google</button></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const email = ref("");
const password = ref("");
const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log(data, "succesfully registered");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};

const signInWithGoogle = () => {};
</script>

<style scoped></style>
