<script setup lang="ts">
import { computed } from 'vue'

import Celda from '@/componentes/Celda.vue'

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

const agregarFecha = (numeroCelda: number, fecha: string, celdas: string[][]) => {
  // Calcula la fila y columna correspondientes al número de celda
  const fila = Math.floor(numeroCelda / props.columnas)
  const columna = numeroCelda % props.columnas

  // Asigna la fecha a la celda especificada
  celdas[fila][columna] = fecha
}

const calendario = computed(() => {
  // Inicializa una matriz de celdas con guiones '-'
  const celdas: string[][] = Array.from({ length: props.filas }, () => Array.from<string>({ length: props.columnas }).fill('-'))

  // Calcula el primer día del mes
  const primerDia = new Date(`${props.ano}-${props.mes}-1`)

  // Obtiene la posición del primer día de la semana (0: Domingo, 1: Lunes, ..., 6: Sábado)
  const posicionPrimerDia = [6, 0, 1, 2, 3, 4, 5][primerDia.getDay()]

  // Obtiene el número de días en el mes
  const numeroDiasMes = new Date(props.ano, props.mes, 0).getDate()

  // Genera un rango de números desde la posición del primer día hasta el número total de días en el mes
  const rangoNumeros = [...Array(numeroDiasMes).keys()].map((i) => i + posicionPrimerDia)

  // Recorre el rango de números para añadir la fecha correspondiente en las celdas
  rangoNumeros.map((numeroCelda, indice) => agregarFecha(numeroCelda, `${props.ano}-${props.mes}-${indice + 1}`, celdas))

  // Devuelve la matriz de celdas actualizada
  return celdas
})
</script>

<template>
  <section class="flex flex-col space-y-4">
    <ol class="flex flex-row space-x-4">
      <li class="flex flex-row justify-center items-center flex-1 p-4 rounded bg-blue-500" v-for="semana in props.semana">
        <p class="text-white font-semibold text-xl">{{ semana }}</p>
      </li>
    </ol>
    <ol v-for="(fila, filaIndice) in calendario" :key="filaIndice" class="flex flex-row space-x-4">
      <Celda v-for="(celda, celdaIndice) in fila" :fecha="celda" :key="celdaIndice" />
    </ol>
  </section>
</template>
