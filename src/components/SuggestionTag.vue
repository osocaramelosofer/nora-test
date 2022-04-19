<script setup>
const props = defineProps({
  text: String
})
</script>
<template>
  <div
    class="
      bg-nora-gray-300
      rounded-md
      px-3
      py-1
      flex
      items-center
      justify-center
      cursor-pointer
    "
  >
    <span class="text-nora-blue-200 font-semibold text-sm">{{ text }}</span>
  </div>
</template>