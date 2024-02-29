<script setup lang="ts">
import type { IEvento } from '@/interfaces'

import EliminarEvento from '@/components/celdas/eventos/EliminarEvento.vue'
import ModificarEvento from '@/components/celdas/eventos/ModificarEvento.vue'

interface Props {
  evento: IEvento
}
const props = defineProps<Props>()
</script>

<template>
  <li class="flex flex-col space-y-4 p-4 mx-2 bg-white border border-black/10 rounded">
    <p>{{ props.evento.titulo }}</p>
    <div class="flex flex-col space-y-2">
      <ModificarEvento :evento="props.evento" />
      <EliminarEvento :evento="props.evento" />
    </div>
  </li>
</template>
