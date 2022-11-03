<script setup>
import Nav from "@/components/Nav.vue";
</script>

<template>
  <Nav :no="true" />
  <div class="px-6 md:px-36 mt-6 md:mt-24">
    <div class="grid grid-cols-6">
      <div
        class="heading-1 col-start-1 md:col-start-2 col-span-6 md:col-span-4"
      >
        10 Secret Tips For Managing a Remote Team
      </div>

      <div
        class="col-start-1 md:col-start-2 col-span-6 md:col-span-4 mt-8 mb-12"
      >
        <div class="flex justify-between items-center">
          <div class="flex items-center">
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
          <div class="flex items-center">
            <div class="body-2 text-gray-1">Share</div>
            <div>
              <img src="@/assets/whatsapp.svg" class="ml-4" alt="Vite logo" />
            </div>
            <div>
              <img src="@/assets/facebook.svg" class="ml-2" alt="Vite logo" />
            </div>

            <div>
              <img src="@/assets/twitter.svg" class="ml-2" alt="Vite logo" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <img
      src="@/assets/imagedetail.svg"
      class=""
      alt="Vite logo"
      style="width: 100%"
    />

    <div class="grid grid-cols-6 mt-12">
      <div class="body-1 col-start-1 md:col-start-2 col-span-6 md:col-span-4">
        It may not be widely known that heading into this pandemic about a
        quarter of the workforce in the Unites States already worked from home –
        at least a portion of the time. So, it is safe to say we can glean a few
        valuable tips from managers already exhibiting these best practices.
        <br />
        <br />
        And while it is always preferable to establish clear remote-work
        policies and training in advance, in times of crisis or other rapidly
        changing circumstances, this level of preparation may not be feasible.
        Fortunately, there are specific, research-based steps that managers can
        take without great effort to improve the engagement and productivity of
        remote employees, even when there is little time to prepare. Guess,
        what? The time is now!
        <br />
        <br />
        Common Challenges
        <br />
        <br />
        To start, managers need to understand factors that can make remote work
        especially demanding. Otherwise high-performing employees may experience
        declines in job performance and engagement when they begin working
        remotely, especially in the absence of preparation and training.
        <br />
        <br />
        That said, the majority of many well intentioned organizations are made
        up of already actively or passively disengaged employees. So, imagine
        how working remotely impacts their level of engagement, performance, and
        connection to the mission?
        <br />
        <br />
        Here’s How Managers Can Better Lead Remote Teams
        <br />
        <br />
        As much as remote work can be fraught with challenges, there are also
        relatively quick and inexpensive things that managers can do to ease the
        transition.
      </div>

      <div class="col-start-1 md:col-start-2 col-span-6 md:col-span-4 mt-12">
        <div class="flex items-start">
          <div
            class="rounded-full flex justify-center items-center w-10 h-10 mr-4 bg-orange"
          >
            p
          </div>
          <div>
            <div class="body-3 text-gray-2">WRITEN BY</div>
            <div class="title-1">John Doe</div>
            <div class="body-1 text-gray-1">
              CEO a Team. Author of the upcoming book on Team Management and
              leadership
            </div>
          </div>
        </div>
      </div>

      <div
        class="col-start-1 md:col-start-2 col-span-6 md:col-span-4 border-gray-2 w-full my-6 md:my-12"
      />

      <div
        class="col-start-1 md:col-start-2 col-span-6 md:col-span-4 md:mb-0 mb-6"
      >
        <div class="body-1 text-gray-1 mb-4">Join the conversation</div>
        <div class="flex">
          <div
            class="rounded-full flex justify-center items-center w-10 h-10 mr-4 bg-orange"
          >
            p
          </div>
          <textarea
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlTextarea1"
            rows="4"
            placeholder="Comments"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
