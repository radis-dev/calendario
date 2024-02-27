import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFechaEstado = defineStore('eventos', () => {
  const ano = ref(new Date().getFullYear())
  const mes = ref(new Date().getMonth() + 1)

  return { ano, mes }
})
