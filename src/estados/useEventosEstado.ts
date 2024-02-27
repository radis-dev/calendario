import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEventosEstado = defineStore('eventos', () => {
  const eventos = ref<IEvento[]>([])

  const agregarEventos = (nuevosEventos: IEvento[]) => {
    eventos.value.push(...nuevosEventos)
  }

  const agregarEvento = (nuevoEvento: IEvento) => {
    eventos.value.push(nuevoEvento)
  }

  const obtenerEventos = (fecha: string) => {
    return eventos.value.filter((evento) => evento.fecha === fecha)
  }

  const eliminarEventos = (fecha: string) => {
    eventos.value = eventos.value.filter((evento) => evento.fecha !== fecha)
  }

  const eliminarEvento = (id: string) => {
    eventos.value = eventos.value.filter((evento) => evento.id !== id)
  }

  return { eventos, obtenerEventos, eliminarEventos, agregarEventos, agregarEvento, eliminarEvento }
})
