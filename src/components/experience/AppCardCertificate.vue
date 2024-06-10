<template>
  <a :href="link" target="_blank" rel="nopener noreferrer">
    <img
      :src="src"
      :alt="alt"
      class="w-60 h-40 min-w-40 min-h-28 object-cover border border-gray-700 rounded-2xl filter grayscale hover:grayscale-0 transform transition duration-300 ease-in-out hover:scale-105"
    />
  </a>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{
  link: string;
  src: string;
  alt: string;
}>();
</script>

<style scoped></style>
