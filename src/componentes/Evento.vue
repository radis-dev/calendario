<script setup lang="ts">
import ModificarEvento from '@/componentes/ModificarEvento.vue'
import EliminarEvento from '@/componentes/EliminarEvento.vue'

interface Props {
  id: number
  titulo: string
}

const props = defineProps<Props>()
</script>

<template>
  <li class="flex flex-col space-y-4 p-4 mx-2 bg-white border border-black/10 rounded">
    <p>Montar a caballo</p>
    <div class="flex flex-row space-x-4">
      <ModificarEvento :id="props.id" />
      <EliminarEvento :id="props.id" />
    </div>
  </li>
</template>
