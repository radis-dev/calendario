<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { IEvento } from '@/interfaces'

interface Props {
  evento: IEvento
}
const props = defineProps<Props>()

const estaAbierto = ref(false)
const alternarMenu = () => {
  estaAbierto.value = !estaAbierto.value
}

const formulario = reactive({
  titulo: props.evento.titulo,
  fecha: props.evento.fecha
})

const emitir = defineEmits(['modificarEvento'])

const manejarAccion = () => {
  const eventoModificado: IEvento = {
    id: props.evento.id,
    titulo: formulario.titulo,
    fecha: formulario.fecha
  }
  emitir('modificarEvento', eventoModificado)
  alternarMenu()
}
</script>

<template>
  <div>
    <button @click="alternarMenu" class="text-white bg-orange-500 hover:bg-orange-600 p-2 rounded-b font-medium w-full">Modificar</button>

    <div v-if="estaAbierto" class="fixed left-0 top-0 bg-gray-700 bg-opacity-75 w-screen h-screen">
      <div class="bg-white rounded p-8 mx-auto my-20 w-11/12 md:w-1/2">
        <h1 class="font-bold text-xl mb-6">Modificar evento</h1>
        <div class="flex flex-col space-y-4">
          <div class="flex flex-col space-y-2">
            <label for="titulo" class="font-medium text-neutral-800">Titulo:</label>
            <input v-model="formulario.titulo" type="text" id="titulo" class="bg-gray-100 rounded px-3.5 py-2 border border-neutral-200 focus:outline-none" />
          </div>
          <div class="flex flex-col space-y-2">
            <label for="fecha" class="font-medium text-neutral-800">Fecha:</label>
            <input v-model="formulario.fecha" type="date" id="fecha" class="bg-gray-100 rounded px-3.5 py-2 border border-neutral-200 focus:outline-none" />
          </div>
        </div>
        <div class="flex justify-end gap-4 mt-5">
          <button @click="manejarAccion" class="font-medium bg-orange-500 px-6 py-2 rounded text-white hover:bg-orange-600">Modificar</button>
          <button @click="alternarMenu" class="font-medium px-3.5 py-2 rounded text-neutral-800 bg-gray-100 hover:bg-gray-200 transition duration-100 ease-in-out">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>
