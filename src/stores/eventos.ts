import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IEvento } from '@/interfaces'

export const useEventosStore = defineStore('eventos', () => {
  const eventos = ref<Record<string, IEvento[]>>({})

  const obtenerEventos = (fecha: string): IEvento[] => {
    return eventos.value[fecha] || []
  }

  const agregarEventos = (fecha: string, nuevosEventos: IEvento[]) => {
    if (!eventos.value[fecha]) {
      eventos.value[fecha] = []
    }
    eventos.value[fecha].push(...nuevosEventos)
  }

  const agregarEvento = (evento: IEvento) => {
    if (!eventos.value[evento.fecha]) {
      eventos.value[evento.fecha] = []
    }
    eventos.value[evento.fecha].push(evento)
  }

  const eliminarEventos = (fecha: string) => {
    delete eventos.value[fecha]
  }

  const eliminarEvento = (fecha: string, id: string) => {
    if (eventos.value[fecha]) {
      eventos.value[fecha] = eventos.value[fecha].filter((evento) => evento.id !== id)
      eventos.value[fecha].length == 0 && eliminarEventos(fecha)
    }
  }

  const actualizarEvento = (fecha: string, evento: IEvento) => {
    if (fecha != evento.fecha) {
      if (new Date(fecha).getMonth() == new Date(evento.fecha).getMonth()) {
        eliminarEvento(fecha, evento.id!)
        agregarEvento(evento)
      }
      eliminarEvento(fecha, evento.id!)
    } else {
      const indice = eventos.value[fecha].findIndex((evento) => evento.id === evento.id)
      if (indice !== -1) {
        eventos.value[fecha][indice] = evento
      }
    }
  }

  return { eventos, agregarEventos, agregarEvento, obtenerEventos, eliminarEventos, eliminarEvento, actualizarEvento }
})
