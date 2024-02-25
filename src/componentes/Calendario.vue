<script setup lang="ts">
interface Props {
  ano: number
  mes: number
  semana?: string[]
  columnas?: number
  filas?: number
}

const props = withDefaults(defineProps<Props>(), {
  ano: 2002,
  mes: 9,
  semana: () => ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
  columnas: 7,
  filas: 6
})
</script>

<template>
  <section class="grid grid-cols-7 grid-rows-6 gap-2"></section>
</template>
