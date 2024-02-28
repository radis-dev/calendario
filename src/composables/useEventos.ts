import { ref, watch, type Ref } from 'vue'
import type { IEvento } from '@/interfaces'
import * as apiEvento from '@/api/eventos'

export function useEventos(fecha: Ref<string>) {
  const eventos = ref<IEvento[]>([])

  const obtenerEventos = async () => {
    eventos.value = await apiEvento.obtenerEventos(fecha.value)
  }

  watch(fecha, obtenerEventos, { immediate: true })

  return { eventos }
}
