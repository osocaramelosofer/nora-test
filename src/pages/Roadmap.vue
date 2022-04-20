<script setup>
import {ref} from 'vue'

import RoadmapCard from "../components/RoadmapCard.vue";

let purple = ref(false)
let blue = ref(false)
let orange = ref(false)

const planned = [
  {
    type: "Planned",
    title: "More comprehensive reports",
    text: "It would be great to see a more detailed breakdown of solutions.",
    tag: "Feature",
    number: 2,
    comments: 2,
  },
  {
    type: "Planned",
    title: "More comprehensive reports",
    text: "It would be great to see a more detailed breakdown of solutions.",
    tag: "Feature",
    number: 2,
    comments: 2,
  },
];

const inProgress = [
  {
    type: "In Progress",
    title: "One-click portfolio generation",
    text: "Add ability to create professional looking portfolio from profile.",
    tag: "Feature",
    number: 62,
    comments: 1,
  },
  {
    type: "In Progress",
    title: "Bookmark challenges",
    text: "Be able to bookmark challenges to take later on.",
    tag: "Feature",
    number: 31,
    comments: 1,
  },
  {
    type: "In Progress",
    title: "Animated solution screenshots",
    text: "Screenshots of solutions with animations don’t display content.",
    tag: "Bug",
    number: 9,
    comments: 0,
  },
];

const live = [
  {
    type: "Live",
    title: "Add micro-interactions",
    text: "Small animations at specific points can add delight.",
    tag: "Enhancement",
    number: 71,
    comments: 2,
  },
];
const addBorderColor = (color) => {
  if(color === 'purple'){
    purple.value = !purple.value
    blue.value = false
    orange.value = false

  }

  if(color === 'blue'){
    blue.value = !blue.value
    orange.value = false
    purple.value = false
  }

  if(color === 'orange'){
    orange.value = !orange.value
    blue.value = false
    purple.value = false
  }
}
</script>

<template>
  <div class="bg-nora-gray-200 md:px-20  2xl:px-72 md:py-16">
    <div class="top-bar flex items-center justify-between bg-nora-blue-300 px-10 py-5 md:rounded-md">
      <div class="grid py-2 gap-y-2">
        <router-link to="/" class="text-white font-bold text-sm">Go back</router-link>
        <span class="font-bold text-white text-2xl">Roadmap</span>
      </div>

      <div class="bg-inherit">
        <div class="bg-nora-purple rounded-md text-white px-3 py-3">
          <router-link to="Feedback" class="text-white font-bold text-sm">+ Add Feedback</router-link>
        </div>
      </div>
    </div>

    <!-- Show when the resolution is >= 768px -->
    <div class="hidden md:block">
      <div class="grid grid-cols-3 gap-x-5">
        <div class="grid content-start">
          <div class="flex flex-col gap-y-1 my-10">
            <span class="font-bold text-sm text-nora-blue-300">Planned({{planned.length}})</span>
            <span class="text-nora-gray-400 text-sm font-normal">Ideas prioritized for research</span>
          </div>
          <div class="container grid gap-y-5">
            <roadmap-card
              v-for="(card, index) in planned"
              :key="index"
              :card="card"
            />
          </div>
        </div>
        <div class="grid content-start">
          <div class="flex flex-col gap-y-1 my-10">
            <span class="font-bold text-sm text-nora-blue-300">In-Progress({{inProgress.length}})</span>
            <span class="text-nora-gray-400 text-sm font-normal">Features currently being developed</span>
          </div>
          <div class="container grid gap-y-5">
            <roadmap-card
              v-for="(card, index) in inProgress"
              :key="index"
              :card="card"
            />
          </div>
        </div>
        <div class="grid content-start">
          <div class="flex flex-col gap-y-1 my-10">
            <span class="font-bold text-sm text-nora-blue-300">Live ({{live.length}})</span>
            <span class="text-nora-gray-400 text-sm font-normal">Released features</span>
          </div>
          <div class="container grid gap-y-5">
            <roadmap-card
              v-for="(card, index) in live"
              :key="index"
              :card="card"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Show when is less than 768px -->
    <div class="md:hidden px-8">
      <div class="flex justify-between border-b border-gray-300">
        <div @click="addBorderColor('blue')" :class="{'border-orange-400': blue}" class="border-b-4 cursor-pointer">
          <span class="font-bold text-sm text-nora-blue-300">Planned(2)</span>
        </div>
        <div @click="addBorderColor('purple')" :class="{'border-purple-500': purple}" class="border-b-4 cursor-pointer">
          <span class=" font-bold text-sm text-nora-blue-300">In-Progress(3)</span>
        </div>
        <div @click="addBorderColor('orange')" :class="{'border-blue-300': orange}" class="border-b-4 cursor-pointer">
          <span class="font-bold text-sm text-nora-blue-300">Live(1)</span>
        </div>
      </div>

      <div class="pb-28 " :class="{'hidden': !blue}">
        <div class="container grid gap-y-5">
          <div class="flex flex-col gap-y-1 my-3">
            <span class="font-bold text-lg text-nora-blue-300">Planned ({{planned.length}})</span>
            <span class="text-nora-gray-400 text-sm font-normal">Ideas prioritized for research</span>
          </div>
          <roadmap-card
            v-for="(card, index) in planned"
            :key="index"
            :card="card"
          />
        </div>
      </div>
      <div class="pb-28 " :class="{'hidden': !purple}">
        <div class="container grid gap-y-5">
          <div class="flex flex-col gap-y-1 my-3">
            <span class="font-bold text-lg text-nora-blue-300">In-Progress ({{inProgress.length}})</span>
            <span class="text-nora-gray-400 text-sm font-normal">Features currently being developed</span>
          </div>
          <roadmap-card
            v-for="(card, index) in inProgress"
            :key="index"
            :card="card"
          />
        </div>
      </div>
      <div class="pb-28 " :class="{'hidden': !orange}">
        <div class="container grid gap-y-5">
          <div class="flex flex-col gap-y-1 my-3">
            <span class="font-bold text-lg text-nora-blue-300">Live ({{live.length}})</span>
            <span class="text-nora-gray-400 text-sm font-normal">Released features</span>
          </div>
          <roadmap-card
            v-for="(card, index) in planned"
            :key="index"
            :card="card"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>