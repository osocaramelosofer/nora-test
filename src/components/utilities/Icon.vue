<script setup>
const props = defineProps({
  filename: String,
  alt: [],
  width: Number,
  height: Number,
});


</script>
<template>
  <div :style="{ width: width + 'px', height: height + 'px' }">
    <!-- <img src="../../assets/up-arrow.svg" :alt="alt" class="w-full h-full object-fill" /> -->
    <!-- <img :src="require('@/assets/' + filename)" :alt="alt" class="w-full h-full object-fill" /> -->
  </div>
</template>