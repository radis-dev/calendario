<script setup lang="ts">
import AgregarEvento from '@/componentes/AgregarEvento.vue'
import Eventos from '@/componentes/Eventos.vue'

interface Props {
  fecha: string
}

const props = defineProps<Props>()
</script>

<template>
  <li v-if="props.fecha !== '-'" class="flex flex-col space-y-4 flex-1 border border-black/10 rounded bg-gray-50 min-w-28">
    <p class="flex flex-row justify-start content-start text-lg p-4">{{ new Date(props.fecha).getDate() }}</p>
    <Eventos :fecha="props.fecha" />
    <AgregarEvento :fecha="props.fecha" />
  </li>
  <li v-else class="flex flex-1 min-w-28"></li>
</template>
