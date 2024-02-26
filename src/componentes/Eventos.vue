<script setup lang="ts">
import Evento from '@/componentes/Evento.vue'

const eventos = [
  {
    id: 1,
    titulo: 'Montar a caballo'
  }
]
</script>

<template>
  <ul>
    <Evento v-for="evento in eventos" :id="evento.id" :titulo="evento.titulo" />
  </ul>
</template>
