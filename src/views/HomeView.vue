<template>
  <div class="h-screen pt-3">
    <div class="mr-32 mt-20">
      <!-- <h1 class="text-2xl pb-20">Home</h1> -->
      <div class="flex justify-center items-center">
        <img
          src="/img/perfil.jpg"
          class="rounded-full h-80 w-80 object-cover m-10"
          alt="Perfil"
        />

        <div class="flex flex-col gap-3 text-center">
          <p class="text-md font-semibold">Hola, Soy</p>
          <p class="text-3xl font-bold">Leonardo Cueto</p>
          <p class="text-xl font-semibold text-gray-700">Frontend Developer</p>
          <div class="flex gap-2">
            <button
              class="border-2 rounded-full border-black hover:bg-gray-100 hover:shadow-md px-5 py-3 text-xs font-semibold"
            >
              Descargar CV
            </button>
            <IconContact />
          </div>
          <div class="flex gap-2 justify-center items-center">
            <a
              class="rounded-full border-black hover:bg-blue-400"
              href="https://www.linkedin.com/in/leonardo-cueto/"
              target="_blank"
              rel="nopener noreferrer"
            >
              <IconLinkedIn />
            </a>
            <a
              class="border-2 rounded-full border-black hover:bg-gray-300"
              href="https://github.com/leonardocueto"
              target="_blank"
              rel="nopener noreferrer"
            >
              <IconGitHub />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconGitHub from "@/components/icons/IconGitHub.vue";
import IconLinkedIn from "@/components/icons/IconLinkedIn.vue";
import IconContact from "@/components/icons/IconContact.vue";
</script>
