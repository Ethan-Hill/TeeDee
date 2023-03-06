<script setup lang="ts">
import { Todo } from "~~/types/todos.jss";

const { todo } = defineProps<{ todo: Todo }>();
</script>

<template>
  <button class="cursor-grab">
    <Icon name="carbon:list" class="mr-4" />
    <span class="sr-only">Move</span>
  </button>
</template>
