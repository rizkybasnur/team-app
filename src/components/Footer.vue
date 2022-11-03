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
  <div
    class="px-6 md:px-36 py-8 md:py-24 mt-6 md:mt-52"
    style="background-color: #463759"
  >
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 md:col-span-3">
        <a class="cursor-pointer" @click="$router.push('/')">
          <img src="@/assets/logo.svg" class="logo" alt="Vite logo" />
        </a>
        <div class="body-2 text-gray-2 mt-4" style="max-width: 168px">
          Collaboration platform modern teams.
        </div>
      </div>
      <div class="col-span-12 md:col-span-2" style="max-width: 168px">
        <div class="title-1 text-gray-3 mb-4">COMPANY</div>
        <div class="body-2 text-gray-2 mb-2 cursor-pointer" @click="tes">
          Product
        </div>
        <div
          class="body-2 text-gray-2 mb-2 cursor-pointer"
          @click="$router.push('/blog')"
        >
          Blog
        </div>
        <div class="body-2 text-gray-2 mb-2 cursor-pointer" @click="tes">
          Support
        </div>
      </div>
      <div class="col-span-12 md:col-span-2" style="max-width: 168px">
        <div class="title-1 text-gray-3 mb-4">FEATURES</div>
        <div class="body-2 text-gray-2 mb-2 cursor-pointer" @click="tes">
          Screen Sharing
        </div>
        <div class="body-2 text-gray-2 mb-2 cursor-pointer" @click="tes">
          iOS & Android Apps
        </div>
        <div class="body-2 text-gray-2 mb-2 cursor-pointer" @click="tes">
          File Sharing
        </div>
        <div class="body-2 text-gray-2 mb-2 cursor-pointer" @click="tes">
          User Management
        </div>
      </div>
      <div class="col-span-12 md:col-span-2" style="max-width: 168px">
        <div class="title-1 text-gray-3 mb-4">CONTACT US</div>
        <div class="body-2 text-gray-2 mb-2">info@teamapp.com</div>
        <div class="body-2 text-gray-2 mb-2">1-800-200-300</div>
        <div class="body-2 text-gray-2 mb-2">
          3500 Deer Creek Rd Palo Alto, CA
        </div>
      </div>
      <div class="col-span-12 md:col-span-2" style="max-width: 168px">
        <div class="title-1 text-gray-3 mb-4">STAY TO UPDATE</div>
        <div class="body-2 text-gray-2 mb-2">Subscribe to out news letter</div>
        <div class="body-2 text-gray-2 mb-2">
          <div class="flex">
            <input type="text" class="rounded-l pl-4" placeholder="Email" />
            <button
              class="flex bg-orange-500 font-semibold text-white py-2 px-4 rounded-r"
              @click="tes"
            >
              <i class="mdi mdi-home-outline" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 md:mt-24 body-2 text-gray-2">© Copyright Team Inc.</div>
  </div>
</template>
