<script setup>
const props = defineProps({
  card: Object,
});
</script>
<template>
  <div class="rounded-lg border-t-8 px-5 py-4 grid gap-y-5 border-nora-orange-100 bg-white" :class="[card.type == 'In Progress' ? 'inProgressBorder' : '', card.type == 'Live' ? 'liveBorder' : '']">
    <div class="flex">
      <div class="circle bg-nora-orange-100"></div>
      <span>{{ card.type }}</span>
    </div>
    <h2 class="font-bold text-xs text-nora-blue-300 cursor-pointer hover:text-nora-blue-200">{{ card.title }}</h2>
    <p class="text-xs text-gray-400 font-normal">
      {{ card.text }}
    </p>
    <div class="bg-nora-gray-300 p2 rounded-xl px-3 py-1 justify-self-start">
      <span class="text-nora-blue-200 font-semibold text-xs">
        {{ card.tag }}
      </span>
    </div>
    <div class="flex justify-between">
      <div class="rounded-xl bg-nora-gray-300 mr-10 px-2 py-2 flex flex-col items-center hover:bg-nora-purple-50 cursor-pointer">
        <div class="h-4 w-4">
          <img class="h-full w-full object-fill" src="../assets/up-arrow.svg" />
        </div>
        <span class="font-bold text-xs text-nora-blue-300">{{ card.number}}</span>
      </div>
      <div class="flex items-center">
        <div class="w-6 h-6 mr-4">
          <img src="../assets/think.png" class="h-full w-full object-fill" />
        </div>
        <span class="font-bold text-xs text-nora-blue-300">{{ card.comments }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inProgressBorder {
  border-color: #AD1FEA;
}
.liveBorder {
  border-color: #62BCFA;
}
</style>