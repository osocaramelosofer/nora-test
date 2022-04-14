<script setup>
const props = defineProps({
  suggestions: Array,
});
</script>

<template>
  <div class="py-4 pl-5 pr-10 rounded-md h-36 bg-white flex flex-wrap gap-2">
    <div
      v-for="(suggestion, index) in suggestions"
      :key="index"
      class="bg-nora-gray-300 rounded-xl px-3 flex items-center cursor-pointer"
    >
      <span class="text-nora-blue-200 font-semibold text-xs">{{
        suggestion
      }}</span>
    </div>
  </div>
</template>

<style>
</style>
