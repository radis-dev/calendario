<script setup lang="ts">
import type { IEvento } from '@/interfaces'

import { useEventosStore } from '@/stores/eventos'
import * as apiEventos from '@/api/eventos'

interface Props {
  evento: IEvento
}
const props = defineProps<Props>()

const store = useEventosStore()

const manejarAccion = (): void => {
  apiEventos.eliminarEvento(props.evento.id!)
  store.eliminarEvento(props.evento.fecha, props.evento.id!)
}
</script>

<template>
  <button @click="manejarAccion()" class="border border-black/10 rounded text-white bg-red-500 hover:bg-red-600 p-2 grow">Eliminar</button>
</template>
