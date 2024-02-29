<script setup lang="ts">
import type { IEvento } from '@/interfaces'

interface Props {
  evento: IEvento
}
const props = defineProps<Props>()

const emitir = defineEmits(['eliminarEvento'])

const manejarAccion = () => {
  emitir('eliminarEvento', props.evento.id)
}
</script>

<template>
  <button @click="manejarAccion()" class="border border-black/10 rounded text-white bg-red-500 hover:bg-red-600 p-2 grow">Eliminar</button>
</template>
