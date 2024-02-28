<script setup lang="ts">
import Celda from '@/components/celdas/Celda.vue'

interface Props {
  calendario: string[][]
}

const props = defineProps<Props>()
</script>

<template>
  <ol v-for="(fila, filaIndice) in props.calendario" :key="filaIndice" class="flex flex-row space-x-2">
    <Celda v-for="(celda, celdaIndice) in fila" :fecha="celda" :key="celdaIndice" />
  </ol>
</template>
