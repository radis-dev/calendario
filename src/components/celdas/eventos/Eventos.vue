<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import { useEventos } from '@/composables/useEventos'
import Evento from '@/components/celdas/eventos/Evento.vue'

interface Props {
  fecha: string
}
const props = defineProps<Props>()
const { fecha } = toRefs(props)

const { eventos } = useEventos(fecha)
</script>

<template>
  <Evento v-if="eventos.length > 0" v-for="(evento, indice) in eventos" :key="indice" :id="evento.id" :titulo="evento.titulo" />
  <p v-else class="mx-2 text-center">No hay eventos</p>
</template>
