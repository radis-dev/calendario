import { ref, watch, type Ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import type { IEvento } from '@/interfaces'
import * as apiEvento from '@/api/eventos'

export function useEventos(fecha: Ref<string>) {
  const eventos = ref<IEvento[]>([])

  const obtenerEventos = async () => {
    return await apiEvento.obtenerEventos(fecha.value)
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

  return { eventos }
}
