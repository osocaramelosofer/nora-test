<script setup>
import {ref} from 'vue'

import Boardsuggestions from "./BoardSuggestions.vue";
import Boardroadmap from "./BoardRoadmap.vue";

let suggestions = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

const roadmapObjects = [
  {
    color: "orange",
    name: "Planned",
    number: 2,
  },
  {
    color: "purple",
    name: "In-Progress",
    number: 3,
  },
  {
    color: "blue",
    name: "Live",
    number: 1,
  },
];

const showMenu = ref(false)

const toggleMenu = () => showMenu.value = !showMenu.value


</script>

<template>
  <div class="hidden tablet:block">
      <aside class="laptop:w-64 laptop:gap-y-5 laptop:grid-cols-none laptop:content-start grid  grid-cols-3 gap-x-5 mb-12">
      <div class="frontend-mentor laptop:pt-16 pl-5 pr-10 pb-6 rounded-md flex items-end">
        <div>
          <span class="block font-bold text-xl text-white">Frontend Mentor</span>
          <span class="block font-medium text-nora-gray-300 text-sm">Feedback Board</span>
        </div>
      </div>

      <Boardsuggestions :suggestions="suggestions" />
      <Boardroadmap :roadmapObjects="roadmapObjects"/>
    </aside>
  </div>

  <div class="relative tablet:hidden">
    <nav class="bg-mobile px-2 sm:px-4 py-2.5 flex justify-between">
      <div class="flex flex-col">
        <span class="font-bold text-2xl text-white">Frontend Mentor</span>
        <span class="text-2xl text-white">Feedback Board</span>
      </div>

      <div class="relative">
        <span @click="toggleMenu" v-if="showMenu" class="font-medium text-5xl text-white cursor-pointer">x</span>
        <span @click="toggleMenu" v-else class="font-medium text-5xl text-white cursor-pointer"> = </span>
      </div>
    </nav>
    <div v-if="showMenu" class="blur-bg w-screen h-screen absolute z-10">
      <div class="top absolute bg-nora-gray-100 pl-5  pt-10  right-0 sm:px-12 h-screen w-3/5 flex flex-col gap-y-10">
        <Boardsuggestions :suggestions="suggestions" />
        <Boardroadmap :roadmapObjects="roadmapObjects"/>
      </div>
    </div>
  </div>


</template>

<style>
.frontend-mentor {
  background: rgb(63, 94, 251);
  background: linear-gradient(
    19deg,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 107, 1) 100%
  );
}

.bg-mobile {
  background-image: linear-gradient(to right, #7ad8fb, #7bc5ff, #99adfd, #bf91e6, #dd71bc, #ec69a2, #f36686, #f2696a, #f67d69, #f9906b, #faa371, #fbb57a);
}
.blur-bg {
  background-color: rgba(7, 7, 7, .65);
}
</style>
