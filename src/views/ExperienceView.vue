<template>
  <div class="flex flex-col mt-10">
    <h1 class="text-5xl text-center font-semibold">Experience</h1>
    <div class="flex flex-col items-start gap-5 mt-10">
      <h2 class="text-4xl font-semibold">Skills</h2>
      <div
        class="flex flex-wrap justify-start items-start gap-5 overflow-auto max-h-[70vh]"
      >
        <AppCardExperience
          v-for="card in cardsSkills"
          :key="card.titulo"
          :titulo="card.titulo"
          :skills="card.skills"
        />
      </div>
      <div class="mt-2">
        <h2 class="text-4xl font-semibold mt-2 mb-4">Certificados</h2>
        <div class="flex gap-5 mb-1 ml-2">
          <AppCardCertificate
            v-for="card in cardsCertificate"
            :key="card.alt"
            :src="card.src"
            :alt="card.src"
            :link="card.link"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppCardExperience from "@/components/experience/AppCardExperience.vue";
import AppCardCertificate from "@/components/experience/AppCardCertificate.vue";

const cardsSkills = [
  { titulo: "Vue JS 3", skills: 5 },
  { titulo: "Pinia", skills: 5 },
  { titulo: "Astro", skills: 3 },
  { titulo: "Node.js", skills: 2 },
  { titulo: "React", skills: 3 },
  { titulo: "HTML", skills: 5 },
  { titulo: "SQL", skills: 3 },
  { titulo: "Bootstrap", skills: 4 },
  { titulo: "Tailwind", skills: 5 },
  { titulo: "Strapi", skills: 4 },
  { titulo: "SASS", skills: 4 },
  { titulo: "CSS", skills: 5 },
];

const cardsCertificate = [
  {
    src: "/img/GitCertificado.png",
    alt: "Certificado GitHub",
    link: "https://drive.google.com/file/d/10aSg_H8GWnlq09U_iS5lBOLA1a9FGoHY/view?usp=drive_link",
  },
  {
    src: "/img/ReactCertificado.png",
    alt: "Certificado React",
    link: "https://drive.google.com/file/d/1GgJz1fLiMPAhD3LUJIRVtJtnzjriAJ01/view?usp=drive_link",
  },
  {
    src: "/img/ScrumCertificado.png",
    alt: "Certificado Scrum",
    link: "https://drive.google.com/file/d/19zizrzEbngC6EvQyRbAwF82V4DLn6jMm/view?usp=drive_link",
  },
  {
    src: "/img/TypeScriptCertificado.png",
    alt: "Certificado TypeScript",
    link: "https://drive.google.com/file/d/1sroFJ_x9wSzylBd7uwuXQeCm-e1foyC1/view?usp=drive_link",
  },
];
</script>

<style scoped></style>
