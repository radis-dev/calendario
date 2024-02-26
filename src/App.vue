<script setup lang="ts">
import { useFechaEstado } from '@/estados/useFechaEstado'

import Calendario from '@/componentes/Calendario.vue'
import SelectorFecha from '@/componentes/SelectorFecha.vue'

const fecha = useFechaEstado()
</script>

<template>
  <main class="flex flex-col space-y-8 px-10 pt-16">
    <SelectorFecha />
    <Calendario :ano="fecha.ano" :mes="fecha.mes" />
  </main>
</template>
