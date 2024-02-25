<script setup lang="ts">
interface Props {
  id: number;
}

const props = defineProps<Props>();
</script>

<template>
  <button
    class="border-2 border-black text-white bg-orange-500 hover:bg-orange-600 p-2 grow">
    Modificar
  </button>
</template>
