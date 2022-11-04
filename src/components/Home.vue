<template>
  <div>
    <Header style="height: 100vh" />
  </div>

  <div
    class="px-6 md:px-0 md:grid md:md:grid-cols-2 gap-4"
    style="margin-top: 152px"
  >
    <div class="flex justify-center items-center">
      <div class="md:w-96 flex flex-col gap-8 md:text-start text-center">
        <div class="heading-1">Your hub for teamwork</div>
        <div class="md:hidden justify-end" data-aos="fade-up">
          <img
            src="@/assets/teamwork-image.png"
            alt="teamwork-image"
            loading="lazy"
          />
        </div>
        <div class="body-1">
          Project discussions, important documents, free food announcements:
          they all live tidily together in Team. With your team and information
          in one easily searchable place, collaborating online is as easy as
          collaborating in person.
        </div>
        <div class="link text-orange cursor-pointer" @click="tes">
          Learn More <i class="mdi mdi-arrow-right-thin text-base ml-2" />
        </div>
      </div>
    </div>
    <div class="hidden md:flex justify-end" data-aos="fade-up">
      <img
        src="@/assets/teamwork-image.png"
        alt="teamwork-image"
        loading="lazy"
        style="height: 702px; width: 672px"
      />
    </div>
  </div>

  <div
    class="px-6 md:px-0 md:grid md:grid-cols-2 gap-4"
    style="margin-top: 152px"
  >
    <div class="hidden md:flex justify-end" data-aos="fade-up">
      <img
        src="@/assets/simpletask-image.png"
        alt="simpletask-image"
        loading="lazy"
        style="height: 670px; width: 564px"
      />
    </div>
    <div class="flex justify-center items-center">
      <div class="md:w-96 flex flex-col gap-8 md:text-start text-center">
        <div class="heading-1">Simple task management</div>
        <div class="md:hidden justify-end" data-aos="fade-up">
          <img
            src="@/assets/simpletask-image.png"
            alt="simpletask-image"
            loading="lazy"
          />
        </div>
        <div class="body-1">
          Task management with Team is os simple as it gets. No complicated
          layout and need for user training. Your team members will intuitivily
          know how to navigate the platform. It's so simple, a baby could do It!
        </div>
        <div class="link text-orange cursor-pointer" @click="tes">
          Learn More <i class="mdi mdi-arrow-right-thin text-base ml-2" />
        </div>
      </div>
    </div>
  </div>

  <div
    class="px-6 md:px-0 md:grid md:grid-cols-2 gap-4"
    style="margin-top: 152px"
  >
    <div class="flex-col md:flex justify-center items-center">
      <div class="md:w-96 flex flex-col gap-8 md:text-start text-center">
        <div class="heading-1">Scheduling that actually works</div>
        <div class="md:hidden justify-start" data-aos="fade-up">
          <img
            src="@/assets/scheduling-image.png"
            alt="scheduling-image"
            loading="lazy"
          />
        </div>
        <div class="body-1">
          Integrate a Team calendar with your favorite calendar app, be it
          Google Calendar or iCal. Each team member works with their favorite
          calendar, while all the data is synced with the.racister calendar.
        </div>
        <div class="link text-orange cursor-pointer" @click="tes">
          Learn More <i class="mdi mdi-arrow-right-thin text-base ml-2" />
        </div>
      </div>
    </div>
    <div class="hidden md:flex justify-start" data-aos="fade-up">
      <img
        src="@/assets/scheduling-image.png"
        alt="scheduling-image"
        loading="lazy"
        style="height: 670px; width: 564px"
      />
    </div>
  </div>

  <div
    class="px-6 md:px-0 flex justify-center mb-6 md:mb-20 md:text-start text-center"
    style="margin-top: 152px"
  >
    <div class="heading-1">What people say about Team</div>
  </div>

  <div class="ml-0 md:ml-40">
    <carousel :settings="settings" :breakpoints="breakpoints" ref="myCarousel">
      <slide v-for="slide in 10" :key="slide" class="px-2 py-12">
        <div
          class="px-10 rounded py-12"
          style="width: 365px; box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.08)"
        >
          <div class="text-left mb-8">
            <i v-for="i in 5" class="mdi mdi-star text-2xl text-yellow-300"></i>
          </div>
          <div class="text-left mb-8 body-1 text-black">
            I am very interested in this tool. Makes my team work more
            productively. Which is certainly very efficient in its use. If you
            have problem in task management you can come here and use this tool.
          </div>
          <div class="flex items-center">
            <div
              class="flex justify-center items-center rounded-full bg-teal-400 w-14 h-14 mr-4"
            >
              P
            </div>
            <div class="text-left">
              <div class="title-1">Name</div>
              <div class="body-3 text-gray-1">Jabatan</div>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
    <div class="w-full text-right py-12 pr-40 text-orange">
      <button @click="myCarousel.prev()" class="mr-5">
        <i class="mdi mdi-arrow-left text-3xl" />
      </button>
      <button @click="myCarousel.next()">
        <i class="mdi mdi-arrow-right text-3xl" />
      </button>
    </div>
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import { ref } from "vue";
import { useNotification } from "@kyvg/vue3-notification";

const { notify } = useNotification();

const tes = () => {
  notify({
    text: "Fitur belum tersedia",
    type: "error",
  });
};
const myCarousel = ref(null);
const settings = {
  itemsToShow: 1,
  wrapAround: true,
  snapAlign: "center",

  pauseAutoplayOnHover: true,
};

const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 3.7,
    snapAlign: "center",
  },
  // 1024 and up
};
</script>
