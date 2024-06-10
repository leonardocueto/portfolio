<template>
  <div
    class="flex flex-col items-center px-2 py-3 border-2 border-stone-300 rounded-3xl w-80 h-96"
  >
    <div class="border rounded-3xl w-60 h-60 mt-4">
      <img
        :src="src"
        :alt="alt"
        class="w-full h-full object-cover hover:grayscale-0 transform transition duration-300 ease-in-out hover:scale-105 border rounded-2xl cursor-pointer"
      />
    </div>
    <div class="py-4">
      <p class="text-2xl">{{ projectName }}</p>
    </div>
    <div class="flex gap-2">
      <a
        :href="linkGitHub"
        target="_blank"
        rel="nopener noreferrer"
        class="border rounded-2xl py-4 px-6 text-xs"
        >GitHub</a
      >
      <a
        :href="linkDemo"
        target="_blank"
        rel="nopener noreferrer"
        class="border rounded-2xl py-4 px-6 text-xs"
        >Live Demo</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{
  linkGitHub: string;
  linkDemo: string;
  src: string;
  alt: string;
  projectName: string;
}>();
</script>

<style scoped></style>
