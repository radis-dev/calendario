<script setup lang="ts">
import type { IEvento } from '@/interfaces'

import EliminarEvento from '@/components/celdas/eventos/EliminarEvento.vue'

interface Props {
  eventos: IEvento[]
}
const props = defineProps<Props>()

const emitir = defineEmits(['eliminarEvento'])
</script>

<template>
  <li v-if="props.eventos.length > 0" v-for="(evento, indice) in eventos" :key="indice" class="flex flex-col space-y-4 p-4 mx-2 bg-white border border-black/10 rounded">
    <p>{{ evento.titulo }}</p>
    <div class="flex flex-col space-y-2">
      <EliminarEvento :id="evento.id!" @eliminarEvento="emitir('eliminarEvento', $event)" />
    </div>
  </li>
  <p v-else class="mx-2 text-center">No hay eventos</p>
</template>
