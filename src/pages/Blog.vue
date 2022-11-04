<script setup>
import Nav from "@/components/Nav.vue";
</script>

<template>
  <Nav :no="true" />
  <div class="px-6 sm:px-36 mt-6 md:mt-24">
    <div>
      <div class="heading-1">Blog</div>
      <div class="body-1 text-gray-1 mt-4">
        Our lates web design, tips, tricks, insights, and resources, hot off the
        presses.
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      <div
        v-for="i in 9"
        class="rounded-lg cursor-pointer shadow-lg"
        @click="$router.push('/blog/detail')"
      >
        <div>
          <img
            src="@/assets/image.svg"
            class="logo rounded-t-lg"
            loading="lazy"
            alt="Vite logo"
            style="width: 100%"
          />
        </div>
        <div class="px-6 py-8">
          <div class="heading-3">10 Secret Tips For Managing a Remote Team</div>
          <div class="body-2 text-black-70">
            It may not be widely known that heading into this pandemic about a
            quarter of the workforce in the Unites States already.
          </div>
          <div class="flex mt-8">
            <div
              class="rounded-full flex justify-center items-center w-10 h-10 mr-4 bg-orange"
            >
              p
            </div>
            <div>
              <div class="title-2">John Doe</div>
              <div class="caption-1 text-gray-1">25 January 2021</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex gap-4 mt-12 w-full justify-center items-center">
      <button
        class="bg-white text-orange border-orange font-semibold py-3 px-6 border rounded"
      >
        Prev Page
      </button>
      <button
        class="bg-white text-orange border-orange font-semibold py-3 px-6 border rounded"
      >
        Next Page
      </button>
    </div>
  </div>
</template>

<style scoped></style>
