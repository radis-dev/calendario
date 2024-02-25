<script setup lang="ts">
import ModificarEvento from "@/componentes/ModificarEvento.vue";
import EliminarEvento from "@/componentes/EliminarEvento.vue";

interface Props {
  id: number;
  titulo: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex flex-col space-y-4 p-4 border-2 border-black">
    Montar a caballo
    <div class="flex flex-row space-x-2">
      <ModificarEvento />
      <EliminarEvento />
    </div>
  </div>
</template>
