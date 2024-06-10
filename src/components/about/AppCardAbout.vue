<template>
  <div
    class="flex flex-col items-center justify-center py-8 px-20 rounded-3xl border-gray-600 border"
  >
    <div class="flex flex-col items-center">
      <slot name="icon"></slot>
      <p class="font-semibold">
        <slot name="title"></slot>
      </p>
    </div>
    <slot name="text"></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
