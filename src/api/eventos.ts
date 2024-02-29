import axios from 'axios'

import type { IEvento } from '@/interfaces'

const BASE_URL = 'http://localhost:3000/'

const instancia = axios.create({
  baseURL: BASE_URL
})

export const obtenerEventos = async (fecha: string): Promise<IEvento[]> => {
  const { data } = await instancia.get<IEvento[]>('/eventos', {
    params: { fecha: fecha }
  })
  return data
}

export const eliminarEvento = async (id: string): Promise<void> => {
  await instancia.delete(`/eventos/${id}`)
}

export const agregarEvento = async (evento: IEvento): Promise<IEvento> => {
  const { data } = await instancia.post('/eventos', evento)
  return data
}

export const modificarEvento = async (evento: IEvento): Promise<IEvento> => {
  const { data } = await instancia.put(`/eventos/${evento.id}`, evento)
  return data
}
