<template>
  <div class="w-full h-40 flex justify-evenly items-center px-5">
    <div class="w-full">
      <router-link :to="{ name: 'Home' }" class="text-3xl text-start"
        >Leonardo Cueto</router-link
      >
    </div>
    <div class="flex items-center justify-center gap-10 w-full">
      <router-link :to="{ name: 'About' }" class="text-2xl">About</router-link>
      <router-link :to="{ name: 'Experience' }" class="text-2xl"
        >Experience</router-link
      >
      <router-link :to="{ name: 'Project' }" class="text-2xl"
        >Project</router-link
      >
      <router-link :to="{ name: 'Contact' }" class="text-2xl"
        >Contact</router-link
      >
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
