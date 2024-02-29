<script setup lang="ts">
import type { IEvento } from '@/interfaces'

import { toRefs } from 'vue'

import * as apiEvento from '@/api/eventos'
import { useEventos } from '@/composables/useEventos'

import Eventos from '@/components/celdas/eventos/Eventos.vue'
import AgregarEvento from '@/components/celdas/eventos/AgregarEvento.vue'

interface Props {
  fecha: string
}
const props = defineProps<Props>()
const { fecha } = toRefs(props)

const { eventos } = useEventos(fecha)

const manejarEliminarEvento = async (id: string) => {
  await apiEvento.eliminarEvento(id)
}

const manejarAgregarEvento = async (nuevoEvento: IEvento) => {
  const evento = await apiEvento.agregarEvento(nuevoEvento)
  eventos.value.push(evento)
}

const manejarModificarEvento = async (modificadoEvento: IEvento) => {
  await apiEvento.modificarEvento(modificadoEvento)
}
</script>

<template>
  <li v-if="props.fecha !== '-'" class="flex flex-col space-y-4 flex-1 border border-black/10 rounded bg-gray-50 min-w-28">
    <p class="flex flex-row justify-start content-start text-lg p-4">{{ new Date(props.fecha).getDate() }}</p>
    <Eventos :eventos="eventos" @eliminarEvento="manejarEliminarEvento" @modificarEvento="manejarModificarEvento" />
    <AgregarEvento :fecha="props.fecha" @agregarEvento="manejarAgregarEvento" />
  </li>
  <li v-else class="flex flex-1 min-w-28"></li>
</template>
