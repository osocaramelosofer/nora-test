<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
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
</script>

<template>
  <aside class="w-64 grid gap-y-5 content-start">
    <div class="frontend-mentor pl-5 pr-10 pb-6 rounded-md h-36 flex items-end">
      <div>
        <span class="block font-bold text-xl text-white">Frontend Mentor</span>
        <span class="block font-medium text-nora-gray-300 text-sm">Feedback Board</span>
      </div>
    </div>

    <Boardsuggestions :suggestions="suggestions" />
    <Boardroadmap :roadmapObjects="roadmapObjects"/>
  </aside>
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
</style>
