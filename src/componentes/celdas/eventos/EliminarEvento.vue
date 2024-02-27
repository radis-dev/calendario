<script setup lang="ts">
import { useEventosEstado } from '@/estados/useEventosEstado'
import * as api from '@/utilidades/api'

interface Props {
  id: string
}
const props = defineProps<Props>()

const estado = useEventosEstado()

const manejarEliminar = async () => {
  estado.eliminarEvento(props.id)
  await api.eliminarEvento(props.id)
}
</script>

<template>
  <button @click="manejarEliminar" class="border border-black/10 rounded text-white bg-red-500 hover:bg-red-600 p-2 grow">Eliminar</button>
</template>
