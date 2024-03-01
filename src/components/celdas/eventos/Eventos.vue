<script setup lang="ts">
import { computed, onBeforeUnmount, toRefs, watch } from 'vue'

import { useEventosStore } from '@/stores/eventos'
import * as apiEventos from '@/api/eventos'

import Evento from '@/components/celdas/eventos/Evento.vue'
import type { IEvento } from '@/interfaces'

interface Props {
  fecha: string
}
const props = defineProps<Props>()
const { fecha } = toRefs(props)

const store = useEventosStore()
const eventos = computed(() => store.obtenerEventos(fecha.value))

watch(
  fecha,
  async (nuevos, antiguos) => {
    if (antiguos) {
      store.eliminarEventos(antiguos)
    }

    const nuevosEventos = await apiEventos.obtenerEventos(nuevos)
    if (nuevosEventos.length > 0) {
      store.agregarEventos(nuevos, nuevosEventos)
    }
  },
  {
    immediate: true
  }
)

onBeforeUnmount(() => {
  store.eliminarEventos(fecha.value)
})

const manejarDragStart = (evento: DragEvent, eventoId: string) => {
  evento.dataTransfer!.setData('text/plain', eventoId)
}

const manejarDrop = (eventoDrag: DragEvent) => {
  eventoDrag.preventDefault()
  const eventoId = eventoDrag.dataTransfer!.getData('text/plain')
  const evento = store.obtenerEvento(eventoId)
  if (evento) {
    const eventoActualizado: IEvento = {
      ...evento,
      fecha: fecha.value
    }
    apiEventos.modificarEvento(eventoActualizado)
    store.actualizarEvento(evento.fecha, eventoActualizado)
  }
}
</script>

<template>
  <ul class="min-h-40" @dragover.prevent @drop="manejarDrop">
    <Evento draggable="true" @dragstart="(e) => manejarDragStart(e, evento.id!)" @dragover.prevent v-if="eventos.length > 0" v-for="(evento, indice) in eventos" :key="indice" :evento="evento" />
    <li v-else>
      <p class="mx-2 text-center">No hay eventos</p>
    </li>
  </ul>
</template>
