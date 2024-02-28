<script setup lang="ts">
import { toRefs } from 'vue'

import * as apiEvento from '@/api/eventos'
import { useEventos } from '@/composables/useEventos'

import Eventos from '@/components/celdas/eventos/Eventos.vue'
import AgregarEvento from '@/components/celdas/eventos/AgregarEvento.vue'
import type { IEvento } from '@/interfaces'

interface Props {
  fecha: string
}
const props = defineProps<Props>()
const { fecha } = toRefs(props)

const { eventos } = useEventos(fecha)

const manejarEliminarEvento = (id: string) => {
  apiEvento.eliminarEvento(id)
  eventos.value = eventos.value.filter((evento) => evento.id !== id)
}

const manejarAgregarEvento = async (nuevoEvento: IEvento) => {
  const eventoAgregado = await apiEvento.agregarEvento(nuevoEvento)
  eventos.value = [...eventos.value, eventoAgregado]
}
</script>

<template>
  <li v-if="props.fecha !== '-'" class="flex flex-col space-y-4 flex-1 border border-black/10 rounded bg-gray-50 min-w-28">
    <p class="flex flex-row justify-start content-start text-lg p-4">{{ new Date(props.fecha).getDate() }}</p>
    <Eventos :eventos="eventos" @eliminarEvento="manejarEliminarEvento" />
    <AgregarEvento :fecha="props.fecha" @agregarEvento="manejarAgregarEvento" />
  </li>
  <li v-else class="flex flex-1 min-w-28"></li>
</template>
