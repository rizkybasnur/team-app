<template>
  <div
    class="w-full flex justify-center items-center"
    style="margin-top: 200px"
  >
    <div class="text-center flex flex-col justify-center gap-4">
      <div class="title-1">Sign in to your account</div>
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
      <p v-if="errMsg">{{ errMsg }}</p>
      <p class="flex flex-col gap-4 justify-center">
        <button
          class="flex justify-center bg-orange-500 font-semibold text-white py-2 px-4 rounded"
          @click="register"
        >
          Login
        </button>
        <button
          class="flex justify-center items-center bg-orange-500 font-semibold text-white py-2 px-4 rounded"
          @click="signInWithGoogle"
        >
          Sign in with google <i class="ml-4 mdi mdi-google" />
        </button>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/TaskStore";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import router from "../router";

const email = ref("");
const password = ref("");
const errMsg = ref("");
const taskStore = useTaskStore();

const register = () => {
  errMsg.value = "";
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log(data, "succesfully signed in");

      console.log(auth.currentUser);
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Invalid password";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
    });
};

// let auth;
// onMounted(() => {
//   auth = getAuth();
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       isLoggedIn.value = true;
//     } else {
//       isLoggedIn.value = false;
//     }
//   });
// });

// const handleSignOut = () => {
//   signOut(auth).then(()=>{

//   })
// };

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result, "result");
      taskStore.saveAuth(result.user.providerData[0]);
      localStorage.setItem("auth", JSON.stringify(result.user.providerData[0]));
      router.push("/services");
    })
    .catch((error) => {});
};
</script>

<style scoped></style>
