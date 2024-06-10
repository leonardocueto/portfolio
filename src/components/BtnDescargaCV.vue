<template>
  <button
    @click="downloadPdf"
    class="border-2 rounded-full border-black hover:bg-gray-100 hover:shadow-md px-5 py-3 text-xs font-semibold"
  >
    Descargar CV
  </button>
</template>

<script setup lang="ts">
const downloadPdf = (): void => {
  const pdfUrl =
    "https://drive.google.com/uc?export=download&id=1W78f-td45vouv9vJptQaVBXjkHuKlhgQ";
  window.open(pdfUrl, "_blank");
};
</script>

<style scoped></style>
