<script setup lang="ts">
interface Props {
  semana: string[]
}

const props = defineProps<Props>()
</script>

<template>
  <ol class="flex flex-row space-x-2">
    <li class="flex flex-row justify-center items-center flex-1 p-4 rounded bg-blue-500" v-for="semana in props.semana">
      <p class="text-white font-semibold text-xl">{{ semana }}</p>
    </li>
  </ol>
</template>
