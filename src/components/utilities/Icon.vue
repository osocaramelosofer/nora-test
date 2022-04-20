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
  </div>
</template>