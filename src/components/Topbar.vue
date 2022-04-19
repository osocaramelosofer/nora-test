<script setup>
import Dropdown from './Dropdown.vue'
</script>

<template>
  <div class="bg-nora-blue-300 flex items-center justify-between py-2 px-5 tablet:rounded-lg mb-5">
    <div class="flex">
      <div class="w-10 h-10 mr-3 hidden tablet:block">
        <img src="../assets/idea.png" class="h-full w-full object-fill" />
      </div>
      <span class="text-white font-bold text-lg mr-5 hidden tablet:block">6 Suggestions</span>
      <Dropdown />

    </div>

    <div>
      <div class="bg-nora-purple rounded-md text-white px-2 py-1">
        <router-link to="Feedback">+ Add Feedback</router-link>
      </div>
    </div>
  </div>
</template>

<style>
</style>
