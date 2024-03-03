<script setup lang="ts">
import { ref } from 'vue'

import Calendario from '@/components/Calendario.vue'

const ano = ref(2024)
const mes = ref(3)
</script>

<template>
  <main class="flex flex-col space-y-8 px-10 pt-16">
    <form class="flex flex-row justify-center space-x-4">
      <input class="border border-black/10 rounded bg-gray-50 p-2 text-center w-32" type="number" v-model="ano" />
      <input class="border border-black/10 rounded bg-gray-50 p-2 text-center w-32" type="number" v-model="mes" min="1" max="12" />
    </form>
    <Calendario :ano="ano" :mes="mes" />
  </main>
</template>
