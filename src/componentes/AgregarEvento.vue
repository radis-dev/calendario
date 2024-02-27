<script setup lang="ts">
interface Props {
  fecha: string
}

const props = defineProps<Props>()
</script>

<template>
  <button class="text-white bg-green-500 hover:bg-green-600 p-2 rounded-b font-medium">Agregar</button>
</template>
