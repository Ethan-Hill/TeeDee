<script setup lang="ts">
import { useTodoDelete } from "~~/composables/Todo/useTodoDelete";

import { Todo } from "~~/types/todos.jss";

const { todo } = defineProps<{ todo: Todo }>();

const deleteTodo = async (todoId: number) => await useTodoDelete(todoId);
</script>

<template>
  <button
    class="flex justify-center items-center p-2 text-red-400 bg-zinc-600 hover:bg-zinc-800 rounded-lg transition-colors"
    @click="deleteTodo(todo.id)"
  >
    <Icon name="carbon:trash-can" /><span class="sr-only">Delete</span>
  </button>
</template>
