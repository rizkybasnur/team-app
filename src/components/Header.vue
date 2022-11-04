<script setup>
import Nav from "./Nav.vue";
import HeroText from "./HeroText.vue";
</script>

<template>
  <div class="relative">
    <img
      class="absolute -z-10"
      src="@/assets/hero-image.png"
      loading="lazy"
      alt="hero-image"
      style="height: 100vh; width: 100vw"
    />

    <Nav />

    <HeroText />
  </div>
</template>
