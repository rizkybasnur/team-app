<script setup>
import Nav from "./Nav.vue";
import HeroText from "./HeroText.vue";
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";

const routes = useRoute();
const isHome = computed(() => {
  return routes.name === "Home";
});
</script>

<template>
  <div :style="isHome ? 'height:100vh' : ''">
    <img
      v-if="isHome"
      class="absolute -z-10"
      src="@/assets/hero-image.png"
      loading="lazy"
      alt="hero-image"
      style="height: 100vh; width: 100vw"
    />
    <Nav :no="!isHome" />

    <HeroText v-if="isHome" />
  </div>
</template>
