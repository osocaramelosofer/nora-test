<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Sidebar from "../components/Sidebar.vue";
import Maincontent from "../components/MainContent.vue";
</script>

<template>
  <div
    class="
      bg-nora-gray-200
      grid
      laptop:grid-cols-main
      gap-x-14
      tablet:py-20 tablet:px-10
      xl:px-48
      grid-cols-1
    "
  >
    <Sidebar />
    <Maincontent />
  </div>
</template>