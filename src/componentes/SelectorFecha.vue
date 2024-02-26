<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useFechaEstado } from '@/estados/useFechaEstado'

const fecha = useFechaEstado()
const { ano, mes } = storeToRefs(fecha)
</script>

<template>
  <form class="flex flex-row justify-center space-x-4">
    <input class="text-center border border-black/10 rounded bg-gray-50 p-2" type="number" v-model="ano" />
    <input class="text-center border border-black/10 rounded bg-gray-50 p-2" type="number" v-model="mes" />
  </form>
</template>
