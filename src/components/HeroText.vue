<script setup>
import { useNotification } from "@kyvg/vue3-notification";

const { notify } = useNotification();

const tes = () => {
  notify({
    text: "Fitur belum tersedia",
    type: "error",
  });
};
</script>

<template>
  <div class="px-6 md:px-36 mt-28">
    <div class="text-white wii">
      <div class="wiu">
        <div class="heading-1">Instant collaboration for remote teams</div>
        <div class="body-1 mb-12">
          All-in-one place for your remote team to chat, collaborate and track
          project progress.
        </div>
        <div class="flex flex-col md:flex-row gap-4">
          <input type="text" class="rounded py-4 px-6" placeholder="Email" />
          <button
            class="bg-orange-500 font-semibold text-white py-4 px-6 rounded text-lg"
            @click="tes"
          >
            Get Early Access
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 640px) {
  .wii {
    width: 564px;
  }
  .wiu {
    width: 470px;
  }
} ;
</style>
