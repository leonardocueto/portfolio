<template>
  <div class="flex flex-col max-h-screen overflow-hidden mx-36">
    <div class="w-full">
      <TopbarComponentVue />
    </div>
    <div class="h-full">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import TopbarComponentVue from "./partials/TopbarComponent.vue";
</script>
<style lang="scss" scoped></style>
