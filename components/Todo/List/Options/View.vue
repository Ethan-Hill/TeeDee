<template>
  <button
    class="flex justify-center items-center p-2 text-white bg-zinc-600 hover:bg-zinc-800 rounded-lg transition-colors"
    @click="$emit('change-view')"
  >
    <Icon name="carbon:grid" /><span class="sr-only">Create task</span>
  </button>
</template>
