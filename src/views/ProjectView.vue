<template>
  <div class="flex flex-col mt-10">
    <h1 class="text-5xl text-center font-semibold">Project</h1>
    <div class="mt-12">
      <div class="flex gap-5">
        <AppCardProject
          v-for="card in cardsProjects"
          :key="card.alt"
          :src="card.src"
          :alt="card.alt"
          :link-git-hub="card.linkGitHub"
          :link-demo="card.linkDemo"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppCardProject from "@/components/project/AppCardProject.vue";
const cardsProjects = [
  {
    projectName: "Sales Manager",
    src: "/img/imgSalesManager.png",
    alt: "Sales Manager",
    linkGitHub: "https://github.com/derianrob/crm/tree/testing",
    linkDemo: "https://google.com",
  },
  {
    projectName: "Sales Manager",
    src: "/img/imgSalesManager.png",
    alt: "Sales Manager",
    linkGitHub: "https://google.com",
    linkDemo: "https://google.com",
  },
];
</script>

<style scoped></style>
