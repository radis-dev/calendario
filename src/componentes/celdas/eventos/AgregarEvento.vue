<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useEventosEstado } from '@/estados/useEventosEstado'
import * as api from '@/utilidades/api'

interface Props {
  fecha: string
}
const props = defineProps<Props>()

const formulario = reactive({
  titulo: ''
})

const estaAbierto = ref(false)

const abrirMenu = () => {
  estaAbierto.value = true
}

const cerrarMenu = () => {
  estaAbierto.value = false
}

const estado = useEventosEstado()

const manejarAgregar = async () => {
  const evento = {
    titulo: formulario.titulo,
    fecha: props.fecha
  }

  const nuevoEvento = await api.agregarEvento(evento)
  if (nuevoEvento) {
    estado.agregarEvento(nuevoEvento)
    cerrarMenu()
  }
}
</script>

<template>
  <div>
    <button @click="abrirMenu" class="text-white bg-green-500 hover:bg-green-600 p-2 rounded-b font-medium w-full">Agregar</button>

    <div v-if="estaAbierto" class="fixed left-0 top-0 bg-gray-700 bg-opacity-75 w-screen h-screen">
      <div class="bg-white rounded p-8 mx-auto my-20 w-11/12 md:w-1/2">
        <h1 class="font-bold text-xl mb-6">Agregar evento</h1>
        <div class="flex flex-col space-y-4">
          <div class="flex flex-col space-y-2">
            <label for="nombre" class="font-medium text-neutral-800">Titulo:</label>
            <input v-model="formulario.titulo" type="text" id="nombre" class="bg-gray-100 rounded px-3.5 py-2 border border-neutral-200 focus:outline-none" />
          </div>
        </div>
        <div class="flex justify-end gap-4 mt-5">
          <button @click="manejarAgregar" class="font-medium bg-green-500 px-6 py-2 rounded text-white hover:bg-green-600">Agregar</button>
          <button @click="cerrarMenu" class="font-medium px-3.5 py-2 rounded text-neutral-800 bg-gray-100 hover:bg-gray-200 transition duration-100 ease-in-out">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>
