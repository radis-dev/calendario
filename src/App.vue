<script setup lang="ts">
import Calendario from '@/componentes/Calendario.vue'
</script>

<template>
  <main class="max-w-6xl px-2 lg:px-10 pt-16 md:pt-20 mx-auto">
    <Calendario :ano="2024" :mes="2" />
  </main>
</template>
