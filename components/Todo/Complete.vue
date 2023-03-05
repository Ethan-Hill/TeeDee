<script setup lang="ts">
import { useTodoComplete } from "~~/composables/Todo/useTodoMakeComplete";
import { useTodoUncomplete } from "~~/composables/Todo/useTodoMakeUncomplete";

import { Todo } from "~~/types/todo.js";

const { todo } = defineProps<{ todo: Todo }>();

const completeTodo = async (todoId: number) => await useTodoComplete(todoId);

const uncompleteTodo = async (todoId: number) =>
  await useTodoUncomplete(todoId);
</script>

<template>
  <button
    class="flex justify-center items-center p-2 text-green-400 bg-zinc-600 hover:bg-zinc-800 rounded-lg transition-colors"
    @click="completeTodo(todo.id)"
    v-if="!todo.is_complete"
  >
    <Icon name="carbon:checkmark" /><span class="sr-only">Complete</span>
  </button>

  <button
    class="flex justify-center items-center p-2 text-green-400 bg-zinc-600 hover:bg-zinc-800 rounded-lg transition-colors"
    @click="uncompleteTodo(todo.id)"
    v-else
  >
    <Icon name="carbon:close" /><span class="sr-only">Uncomplete</span>
  </button>
</template>
