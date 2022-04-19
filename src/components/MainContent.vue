<script setup>
import {ref} from 'vue'

import Topbar from "./Topbar.vue";
import Tag from "./Tag.vue";

const tagArray = [
  {
    number: 122,
    tagTitle: "Add Tags for solutions",
    tagText: "Easier to search for solutions based on a specific stack.",
    note: "Enhancement",
  },
  {
    number: 99,
    tagTitle: "Add a dark theme option",
    tagText:
      "It would help people with light sensitivities and who prefer dark mode.",
    note: "Feature",
  },
  {
    number: 65,
    tagTitle: "Q&A within the challenge hubs",
    tagText: "Challenge-specific Q&A would make for easy reference.",
    note: "Feature",
  },
  {
    number: 51,
    tagTitle: "Allow image/video upload to feedback",
    tagText: "Images and screencasts can enhance comments on solutions.",
    note: "Enhancement",
  },
  {
    number: 42,
    tagTitle: "Ability to follow others",
    tagText: "Stay updated on comments and solutions other people post.",
    note: "Feature",
  },
  {
    number: 3,
    tagTitle: "Preview images not loading",
    tagText: "Challenge preview images are missing when you apply a filter.",
    note: "Bug",
  },
];

const suggestions = ref(false);
</script>

<template>
  <main class="w-full">
    <Topbar />
    <div v-if="suggestions" class="grid gap-y-5">
      <div
        v-for="{ number, tagTitle, tagText, note, index } in tagArray"
        :key="index"
      >
        <Tag
          :number="number"
          :tagTtitle="tagTitle"
          :tagText="tagText"
          :note="note"
        />
      </div>
    </div>

    <section v-else class="h-full px-6 tablet:px-0">
      <div
        class="
          h-full
          bg-white
          px-5
          rounded-lg
          flex flex-col
          items-center
          justify-center
          gap-y-4
        "
      >
        <div class="h-40 w-40">
          <img src="../assets/no-data.png" class="w-full h-full object-fill" />
        </div>
        <span class="font-bold text-2xl text-nora-blue-300 text-center">There is no feedback yet.</span>

        <div class="max-w-410">
          <p class="text-base text-nora-gray-400 text-center">
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </p>
        </div>
        <div class="flex flex-col gap-y-2">
          <div class="bg-nora-purple rounded-md text-white px-3 py-2">
            <router-link to="Feedback">+ Add Feedback</router-link>
          </div>
          <button @click="suggestions = !suggestions" class="bg-yellow-400 rounded-md p-2 font-semibold">
            {{ suggestions ? 'Hidde suggestions' : 'Show suggestions'}}
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
</style>
