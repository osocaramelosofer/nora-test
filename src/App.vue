<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Sidebar from "./components/Sidebar.vue";
import Maincontent from "./components/MainContent.vue";
</script>

<template>
  <div class="bg-nora-gray-200 grid grid-cols-main px-20">
    <Sidebar />
    <Maincontent />
  </div>
</template>

<style>
</style>
