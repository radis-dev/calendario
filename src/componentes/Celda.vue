<script setup lang="ts">
import { ref } from 'vue'

import AgregarEvento from './AgregarEvento.vue'
import Eventos from './Eventos.vue'

interface Props {
  fecha: string
}

const props = defineProps<Props>()

const dia = ref(new Date(props.fecha).getDate())
</script>

<template>
  <li class="flex flex-col space-y-4 flex-1 border border-black/10 rounded bg-gray-50">
    <p class="flex flex-row justify-start content-start text-lg p-4">{{ dia }}</p>
    <Eventos />
    <AgregarEvento />
  </li>
</template>
