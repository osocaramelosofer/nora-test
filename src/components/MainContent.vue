<script setup>
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
</script>

<template>
  <main class="w-full">
    <Topbar />
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
  </main>
</template>

<style>
</style>
