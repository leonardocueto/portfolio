<template>
  <div class="flex flex-col mt-10 items-center gap-16">
    <div class="flex flex-col items-center gap-3">
      <h4 class="text-gray-400">Get In Touch</h4>
      <h1 class="text-5xl text-center font-semibold">Contact</h1>
    </div>
    <div
      class="flex items-center justify-evenly border rounded-full w-[700px] h-20 overflow-hidden"
    >
      <button
        @click="contacto"
        class="flex gap-3 items-center hover:bg-slate-300 py-6 px-10 cursor-pointer rounded-l-none transition-colors duration-300"
      >
        <IconMail />
        <span class="text-xl">leonardo.cueto.trabajo@gmail.com</span>
      </button>
      <div>
        <a
          href="https://www.linkedin.com/in/leonardo-cueto/"
          target="_blank"
          rel="nopener noreferrer"
          class="flex items-center gap-3 cursor-pointer hover:bg-blue-300 py-6 px-16 rounded-r-none transition-colors duration-300"
        >
          <IconLinkedIn :height="30" :width="30" />
          <span class="text-xl">LinkedIn</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconMail from "@/components/icons/IconMail.vue";
import IconLinkedIn from "@/components/icons/IconLinkedIn.vue";

const contacto = () => {
  const destinatario = "leonardo.cueto.trabajo@gmail.com";
  const asunto = "Quiero saber más de vos!";
  const cuerpo = "";
  const mailtoURL = `mailto:${destinatario}?subject=${encodeURIComponent(
    asunto
  )}&body=${encodeURIComponent(cuerpo)}`;

  window.location.href = mailtoURL;
};
</script>

<style scoped></style>
