import { watch, type Ref, ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import type { IEvento } from '@/interfaces'
import * as apiEvento from '@/api/eventos'

export function useEventos(fecha: Ref<string>) {
  const eventos = ref<IEvento[]>([])

  const obtenerEventos = async () => {
    return await apiEvento.obtenerEventos(fecha.value)
  }

  const agregarEvento = async (evento: IEvento) => {
    const nuevoEvento = await apiEvento.agregarEvento(evento)
    eventos.value.push(nuevoEvento)
  }

  const eliminarEvento = async (id: string) => {
    await apiEvento.eliminarEvento(id)
    eventos.value = eventos.value.filter((evento) => evento.id !== id)
  }

  const modificarEvento = async (evento: IEvento) => {
    await apiEvento.modificarEvento(evento)
    const indice = eventos.value.findIndex((e) => e.id === evento.id)
    if (indice !== -1) {
      eventos.value.splice(indice, 1, evento)
    }
  }

  const { data, refetch } = useQuery({
    queryKey: ['eventos', fecha.value],
    queryFn: obtenerEventos,
    staleTime: 1000,
    refetchInterval: 1000 * 60
  })

  watch(
    data,
    () => {
      if (data.value) {
        eventos.value = data.value
      }
    },
    { immediate: true }
  )

  watch(fecha, () => refetch())

  return { eventos, agregarEvento, eliminarEvento, modificarEvento }
}
