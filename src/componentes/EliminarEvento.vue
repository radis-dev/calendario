<script setup lang="ts">
interface Props {
  id: number;
}

const props = defineProps<Props>();
</script>

<template>
  <button
    class="border-2 border-black text-white bg-red-500 hover:bg-red-600 p-2 grow">
    Eliminar
  </button>
</template>
