<template>
  <div class="flex justify-between items-center px-6 md:px-36 py-6">
    <a class="cursor-pointer" @click="$router.push('/')">
      <img src="@/assets/logo.svg" class="logo" alt="Vite logo" />
    </a>
    <div
      class="gap-10 items-center hidden md:flex"
      :class="no ? 'text-black-60' : 'text-white'"
    >
      <div class="cursor-pointer" @click="tes">Product</div>
      <router-link class="cursor-pointer" to="/services">Services</router-link>
      <div class="cursor-pointer" @click="tes">Contact</div>
      <div class="cursor-pointer" @click="tes">Sign in</div>
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
        v-if="isMenu"
        @click="isMenu = false"
        :class="no ? 'text-black-60' : 'text-white'"
      >
        <i class="mdi mdi-align-vertical-distribute cursor-pointer text-3xl" />
      </button>
      <button
        v-if="!isMenu"
        @click="isMenu = true"
        :class="no ? 'text-black-60' : 'text-white'"
      >
        <i class="mdi mdi-arrow-right cursor-pointer text-3xl" />
      </button>
    </div>
  </div>
  <div
    ref="target"
    class="md:hidden text-center fixed w-full"
    :class="
      isMenu
        ? 'transform translate-x-full duration-500 overflow-hidden'
        : ' transform  duration-500'
    "
  >
    <ul class="bg-white w-full">
      <li class="hover:bg-purple p-4 text-purple hover:text-white" @click="tes">
        Product
      </li>
      <li class="hover:bg-purple p-4 text-purple hover:text-white" @click="tes">
        Services
      </li>
      <li class="hover:bg-purple p-4 text-purple hover:text-white" @click="tes">
        Contact
      </li>
      <li class="hover:bg-purple p-4 text-purple hover:text-white" @click="tes">
        Sign-in
      </li>
    </ul>
  </div>
  <notifications position="center" />
</template>

<script setup>
import { useNotification } from "@kyvg/vue3-notification";
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
const props = defineProps({
  no: Boolean,
});

const target = ref(null);
const isMenu = ref(false);
const { notify } = useNotification();

onClickOutside(target, (event) => (isMenu.value = true));

const tes = (e) => {
  isMenu.value = true;
  notify({
    text: "Fitur belum tersedia",
    type: "error",
  });
};
</script>
