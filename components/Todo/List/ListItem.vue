<script setup lang="ts">
import { Todo } from "~~/types/todos.jss";

const { todo } = defineProps<{ todo: Todo }>();
</script>

<template>
  <li
    class="p-3 rounded-md flex items-center"
    :class="todo.is_complete ? 'bg-zinc-800 ' : 'bg-zinc-700'"
  >
    <TodoIcon :todo="todo" />
    <TodoTask :todo="todo" />

    <div class="ml-auto flex gap-3">
      <TodoComplete :todo="todo" />

      <TodoDelete :todo="todo" />
    </div>
  </li>
</template>
