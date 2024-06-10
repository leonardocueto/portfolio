<template>
  <button
    class="border-1 rounded-full border-black bg-stone-800 hover:bg-black text-white px-5 py-4 text-xs font-semibold hover:shadow-md"
    @click="contacto"
  >
    Contact Info
  </button>
</template>

<script setup lang="ts">
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
