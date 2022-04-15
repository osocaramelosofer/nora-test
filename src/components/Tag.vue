<script setup>
const props = defineProps({
  number: Number,
  tagTitle: String,
  tagText: String,
  note: String
})
</script>

<template>
  <div
    class="flex bg-white rounded-xl justify-between items-center px-10 py-10"
  >
    <!-- Hay un comportamiento que no entiendo;
    porque funciona items-center/start para ajustar el height del div  contenedor
    al contenido(122)
     -->
    <div class="flex items-center justify-center">
      <div
        class="
          rounded-xl
          bg-nora-gray-300
          mr-10
          px-2
          py-2
          flex flex-col
          items-center
        "
      >
        <div class="h-4 w-4">
          <img class="h-full w-full object-fill" src="../assets/up-arrow.svg" />
        </div>
        <span class="font-bold text-xs text-nora-blue-300">{{ number }}</span>
      </div>
      <div class="grid gap-y-2">
        <span class="text-nora-blue-300 font-bold text-lg">
          {{ tagTitle }}
        </span>
        <p class="text-nora-gray-400 text-base">
          {{ tagText }}
        </p>
        <div
          class="bg-nora-gray-300 p2 rounded-xl px-2 py-1 justify-self-start"
        >
          <span class="text-nora-blue-200 font-semibold text-xs">{{ note }}</span
          >
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <div class="w-6 h-6 mr-4">
        <img src="../assets/think.png" class="h-full w-full object-fill" />
      </div>
      <span class="text-nora-blue-300 font-bold text-base">2</span>
    </div>
  </div>
</template>

<style>
</style>
