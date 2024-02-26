import axios from 'axios'

const BASE_URL = 'http://localhost:3000/eventos'

export const obtenerEventos = async (fecha: string) => {
  try {
    const { data } = await axios.get(BASE_URL, { params: { fecha } })
    return data
  } catch (error) {
    return null
  }
}
