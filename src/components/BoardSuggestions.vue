<script setup>
import SuggestionTag from './SuggestionTag.vue'
const props = defineProps({
  suggestions: Array,
});
</script>

<template>
  <div class="rounded-md bg-white grid gap-y-3 pl-4 pt-5 pr-3 pb-8 laptop:pr-14">
    <div class="flex gap-x-2">
      <SuggestionTag text="All" />
      <SuggestionTag text="UI" />
      <SuggestionTag text="UX" />
    </div>

    <div class="flex gap-x-2">
      <div class="bg-nora-gray-300 rounded-md px-3 flex items-center justify-center cursor-pointer grow">
        <span class="text-nora-blue-200 font-semibold text-sm">Enhancement</span>
      </div>
      <SuggestionTag text="Bug" />
    </div>

    <div class="flex justify-self-start gap-x-4">
      <SuggestionTag text="Feature" />
    </div>
  </div>
</template>

<style>
</style>
