<script setup lang="ts">
import { toRefs } from 'vue'

import { useEventos } from '@/composables/useEventos'

import Eventos from '@/components/celdas/eventos/Eventos.vue'
import AgregarEvento from '@/components/celdas/eventos/AgregarEvento.vue'

interface Props {
  fecha: string
}
const props = defineProps<Props>()
const { fecha } = toRefs(props)

const { eventos, agregarEvento, eliminarEvento, modificarEvento } = useEventos(fecha)
</script>

<template>
  <li v-if="props.fecha !== '-'" class="flex flex-col space-y-4 flex-1 border border-black/10 rounded bg-gray-50 min-w-28">
    <p class="flex flex-row justify-start content-start text-lg p-4">{{ new Date(props.fecha).getDate() }}</p>
    <Eventos :eventos="eventos" @eliminarEvento="eliminarEvento($event)" @modificarEvento="modificarEvento($event)" />
    <AgregarEvento :fecha="props.fecha" @agregarEvento="agregarEvento($event)" />
  </li>
  <li v-else class="flex flex-1 min-w-28"></li>
</template>
