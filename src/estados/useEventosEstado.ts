import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEventosEstado = defineStore('eventos', () => {
  const eventos = ref<IEvento[]>([])

  return { eventos }
})
