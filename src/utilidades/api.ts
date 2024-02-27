import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export const obtenerEventos = async (fecha: string): Promise<IEvento[]> => {
  try {
    const { data } = await axios.get(`${BASE_URL}/eventos`, { params: { fecha } })
    return data
  } catch (error) {
    return []
  }
}

export const eliminarEvento = async (id: string): Promise<IEvento | null> => {
  try {
    const { data } = await axios.delete(`${BASE_URL}/eventos/${id}`)
    return data
  } catch (error) {
    return null
  }
}

export const agregarEvento = async (evento: Object): Promise<IEvento | null> => {
  try {
    const { data } = await axios.post(`${BASE_URL}/eventos`, evento)
    return data
  } catch (error) {
    return null
  }
}
