<script setup lang="ts">
import ModificarEvento from '@/componentes/celdas/eventos/ModificarEvento.vue'
import EliminarEvento from '@/componentes/celdas/eventos/EliminarEvento.vue'

interface Props {
  id: string
  titulo: string
}

const props = defineProps<Props>()
</script>

<template>
  <li class="flex flex-col space-y-4 p-4 mx-2 bg-white border border-black/10 rounded">
    <p>{{ props.titulo }}</p>
    <div class="flex flex-col space-y-2">
      <ModificarEvento :id="props.id" />
      <EliminarEvento :id="props.id" />
    </div>
  </li>
</template>
