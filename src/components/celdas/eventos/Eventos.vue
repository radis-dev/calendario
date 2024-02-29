<script setup lang="ts">
import { computed, onBeforeUnmount, toRefs, watch } from 'vue'

import { useEventosStore } from '@/stores/eventos'
import * as apiEventos from '@/api/eventos'

import Evento from '@/components/celdas/eventos/Evento.vue'

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
</script>

<template>
  <Evento v-if="eventos.length > 0" v-for="(evento, indice) in eventos" :key="indice" :evento="evento" />
  <p v-else class="mx-2 text-center">No hay eventos</p>
</template>
