<script setup lang="ts">
import { ref, watch } from 'vue'
import { obtenerEventos } from '@/utilidades/api'
import Evento from '@/componentes/Evento.vue'

interface Props {
  fecha: string
}
const props = defineProps<Props>()

const eventos = ref<IEvento[]>([])

watch(
  () => props.fecha,
  async () => {
    eventos.value = await obtenerEventos(props.fecha)
  },
  { immediate: true }
)
</script>

<template>
  <div>
    <p v-if="eventos.length > 0">
      <Evento v-for="evento in eventos" :key="evento.id" :id="evento.id" :titulo="evento.titulo" />
    </p>
    <p v-else class="mx-2 text-center">No hay eventos</p>
  </div>
</template>
