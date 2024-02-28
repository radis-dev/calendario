<script setup lang="ts">
interface Props {
  id: string
  titulo: string
}

const props = defineProps<Props>()
</script>

<template>
  <li class="flex flex-col space-y-4 p-4 mx-2 bg-white border border-black/10 rounded">
    <p>{{ props.titulo }}</p>
  </li>
</template>
