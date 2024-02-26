import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFechaEstado = defineStore('eventos', () => {
  const fechaActual = new Date()

  const ano = ref(fechaActual.getFullYear())
  const mes = ref(fechaActual.getMonth() + 1)

  return { ano, mes }
})
