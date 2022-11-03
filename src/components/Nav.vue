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
    <div class="md:hidden">
      <button
        @click="myCarousel.prev()"
        :class="no ? 'text-black-60' : 'text-white'"
      >
        <i class="mdi mdi-align-vertical-distribute cursor-pointer text-3xl" />
      </button>
    </div>
  </div>
  <notifications position="center" />
</template>

<script setup>
import { useNotification } from "@kyvg/vue3-notification";
const props = defineProps({
  no: Boolean,
});

const { notify } = useNotification();

const tes = () => {
  notify({
    text: "Fitur belum tersedia",
    type: "error",
  });
};
</script>
