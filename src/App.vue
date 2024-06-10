<template>
  <component :is="DefaultLayout">
    <router-view />
  </component>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

const DefaultLayout = defineAsyncComponent(
  () => import("@/layouts/DefaultLayout.vue")
);
</script>
