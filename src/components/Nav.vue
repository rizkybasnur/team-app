<template>
  <div class="flex justify-between items-center px-6 md:px-36 py-6">
    <a class="cursor-pointer" @click="$router.push('/')">
      <img
        src="@/assets/logo.svg"
        loading="lazy"
        class="logo"
        alt="Vite logo"
      />
    </a>
    <div
      class="gap-10 items-center hidden md:flex"
      :class="no ? 'text-black-60' : 'text-white'"
    >
      <div class="cursor-pointer" @click="tes">Product</div>
      <router-link class="cursor-pointer" to="/services">Services</router-link>
      <div class="cursor-pointer" @click="tes">Contact</div>
      <div
        v-if="!isLoggedIn"
        class="cursor-pointer"
        @click="$router.push('sign-in')"
      >
        Sign in
      </div>
      <div v-if="isLoggedIn" class="cursor-pointer" @click="handleSignOut">
        Sign out
      </div>
      <div class="cursor-pointer">
        <button
          class="bg-transparent font-semibold py-3 px-6 border rounded"
          :class="no ? 'text-orange border-orange' : 'text-white border-white'"
          @click="tes"
        >
          Get Access
        </button>
      </div>
    </div>
    <div class="md:hidden items-center">
      <button
        v-if="!isMenu"
        @click="isMenu = true"
        :class="no ? 'text-black-60' : 'text-white'"
      >
        <i class="mdi mdi-format-align-justify cursor-pointer text-3xl" />
      </button>
      <button
        v-if="isMenu"
        @click="isMenu = false"
        :class="no ? 'text-black-60' : 'text-white'"
      >
        <i class="mdi mdi-close-outline cursor-pointer text-3xl" />
      </button>
    </div>
  </div>
  <div
    ref="target"
    class="md:hidden text-center fixed w-full"
    :class="
      !isMenu
        ? 'transform translate-x-full duration-300 overflow-hidden'
        : ' transform  duration-300'
    "
  >
    <ul class="bg-purple h-screen">
      <li class="hover:bg-white p-4 text-white hover:text-purple" @click="tes">
        Product
      </li>
      <li class="hover:bg-white p-4 text-white hover:text-purple" @click="tes">
        Services
      </li>
      <li class="hover:bg-white p-4 text-white hover:text-purple" @click="tes">
        Contact
      </li>
      <li class="hover:bg-white p-4 text-white hover:text-purple" @click="tes">
        Sign-in
      </li>
    </ul>
  </div>
  <notifications position="center" />
</template>

<script setup>
import { useNotification } from "@kyvg/vue3-notification";
import { ref, onMounted } from "vue";
import { onClickOutside } from "@vueuse/core";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
const router = useRouter();

const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};

const props = defineProps({
  no: Boolean,
});

const target = ref(null);
const isMenu = ref(false);
const { notify } = useNotification();

onClickOutside(target, (event) => (isMenu.value = false));

const tes = (e) => {
  isMenu.value = false;
  notify({
    text: "Fitur belum tersedia",
    type: "error",
  });
};
</script>
