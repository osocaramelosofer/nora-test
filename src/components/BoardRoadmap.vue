<script setup>
const props = defineProps({
  roadmapObjects: Array,
});
</script>

<template>
  <div class="py-4 px-10 rounded-md h-36 bg-white flex flex-wrap gap-2">
    <div class="w-full flex justify-between items-center">
      <span class="text-nora-blue-300 font-bold text-lg">Roadmap</span>
      <a href="#" class="text-xs text-nora-blue-200 font-semibold">View</a>
    </div>

    <div
      v-for="(roadmapItem, index) in roadmapObjects"
      :key="index"
      class="flex items-center justify-between w-full"
    >
      <div class="flex items-center">
        <div :class="roadmapItem.color" class="w-2 h-2 rounded-full mr-4"></div>
        <span class="text-base text-nora-gray-400">{{roadmapItem.name}}</span>
      </div>
      <span class="text-base text-nora-gray-400 font-bold">{{roadmapItem.number}}</span>
    </div>
  </div>
</template>

<style>
.orange {
  background-color: #F49F85;
}
.purple {
  background-color: #AD1FEA;
}
.blue {
  background-color: #62BCFA;
}
</style>
