<script setup lang="ts">
import { computed } from 'vue'

import Celdas from '@/components/celdas/Celdas.vue'
import DiasSemana from '@/components/DiasSemana.vue'

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

const agregarFecha = (numeroCelda: number, fecha: string, celdas: string[][]): void => {
  const fila = Math.floor(numeroCelda / props.columnas)
  const columna = numeroCelda % props.columnas
  console.log(fila, columna)

  celdas[fila][columna] = fecha
}

const formatearFecha = (ano: number, mes: number, dia: number): string => {
  return new Date(ano, mes - 1, dia + 1).toISOString().split('T')[0]
}

const calendario = computed(() => {
  const celdas: string[][] = Array.from({ length: props.filas }, () => Array.from<string>({ length: props.columnas }).fill('-'))

  const primerDia = new Date(`${props.ano}-${props.mes}-1`)
  const posicionPrimerDia = [6, 0, 1, 2, 3, 4, 5][primerDia.getDay()]
  const numeroDiasMes = new Date(props.ano, props.mes, 0).getDate()

  const rangoNumeros = [...Array(numeroDiasMes).keys()].map((i) => i + posicionPrimerDia)
  rangoNumeros.map((numeroCelda, indice) => {
    const dia = indice + 1
    const fecha = formatearFecha(props.ano, props.mes, dia)
    agregarFecha(numeroCelda, fecha, celdas)
  })

  return celdas
})
</script>

<template>
  <section class="flex flex-col space-y-4">
    <DiasSemana :semana="semana" />
    <Celdas :calendario="calendario" />
  </section>
</template>
