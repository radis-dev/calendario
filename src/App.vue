<script setup lang="ts">
import Calendario from '@/componentes/Calendario.vue'
</script>

<template>
  <main class="px-10 pt-16">
    <Calendario :ano="2023" :mes="1" />
  </main>
</template>
