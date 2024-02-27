<script setup lang="ts">
import { computed, onBeforeUnmount, watch } from 'vue'

import * as api from '@/utilidades/api'
import { useEventosEstado } from '@/estados/useEventosEstado'

import Evento from '@/componentes/celdas/eventos/Evento.vue'

interface Props {
  fecha: string
}
const { fecha } = defineProps<Props>()

const estado = useEventosEstado()
const eventos = computed(() => estado.obtenerEventos(fecha))

watch(
  () => fecha,
  async (newFecha, oldFecha) => {
    if (oldFecha) {
      estado.eliminarEventos(oldFecha)
    }
    const nuevosEventos = await api.obtenerEventos(newFecha)
    estado.agregarEventos(nuevosEventos)
  },
  { immediate: true }
)

onBeforeUnmount(() => {
  estado.eliminarEventos(fecha)
})
</script>

<template>
  <Evento v-if="eventos.length > 0" v-for="evento in eventos" :key="evento.id" :id="evento.id" :titulo="evento.titulo" />
  <p v-else class="mx-2 text-center">No hay eventos</p>
</template>
