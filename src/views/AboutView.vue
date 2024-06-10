<template>
  <div class="flex flex-col justify-center items-center mt-16">
    <h1 class="text-5xl font-semibold">About Me</h1>

    <div class="flex gap-5 mt-10">
      <AppCardAboutVue>
        <template #icon>
          <IconExperience />
        </template>
        <template #title> Experience </template>
        <template #text>
          <p class="text-gray-400">Frontend Development</p>
        </template>
      </AppCardAboutVue>
      <AppCardAboutVue class="">
        <template #icon>
          <IconPerson />
        </template>
        <template #title>
          <p>Education</p>
        </template>
        <template #text>
          <p class="text-gray-400">UAI. Analista Programador</p>
        </template>
      </AppCardAboutVue>
    </div>
    <div class="pt-10">
      <p class="max-w-[1000px] min-w-96">
        Soy una persona entusiasta y actualizada en las últimas tendencias y
        tecnologías. Me adapto rápidamente a nuevos entornos y aprendo con
        facilidad. Actualmente, estoy finalizando mi carrera como Analista
        Programador y he completado numerosos cursos sobre desarrollo frontend.
        Estoy altamente motivado para seguir aprendiendo y creciendo
        profesionalmente
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import AppCardAboutVue from "@/components/about/AppCardAbout.vue";
import IconExperience from "@/components/icons/IconExperience.vue";
import IconPerson from "@/components/icons/IconPerson.vue";
</script>
