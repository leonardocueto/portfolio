<template>
  <div
    class="border-gray-200 border rounded-2xl p-6 w-40 h-28 min-w-40 min-h-28"
  >
    <h1 class="text-2xl text-center mb-2">{{ titulo }}</h1>
    <div class="flex gap-2">
      <div v-for="(skill, index) in skills" :key="index">
        <div class="bg-black w-4 h-4 rounded-full"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{
  titulo: string;
  skills: number;
}>();
</script>

<style scoped></style>
