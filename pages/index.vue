<script setup lang="ts">
import { useTodoFetchActive } from "~~/composables/Todo/useTodoFetchActive";
import { useTodoFetchCompleted } from "~~/composables/Todo/useTodoFetchCompleted";

const isList = ref(false);

const toggleView = useToggle(isList);

const { completeTodos } = await useTodoFetchCompleted();
const { activeTodos } = await useTodoFetchActive();

let todos = computed(() => {
  let todos = { completeTodos, activeTodos };
  return todos;
});

definePageMeta({
  layout: "todo",
});

useSeoMeta({
  title: "Todo list",
  description: "TeeDee todo list page",
});
</script>

<template>
  <div class="flex justify-center items-center min-h-full flex-grow my-4">
    <div
      class="sm:rounded-xl p-6 hover:ring-0 shadow-none bg-zinc-900 h-full lg:w-3/4 w-11/12 relative"
    >
      <h2 class="mb-10 font-black text-xl uppercase text-center">Todo list</h2>

      <div class="absolute top-5 right-5 flex gap-2">
        <TodoListOptionsView @change-view="toggleView()" />

        <TodoListOptionsAdd />
      </div>

      <div class="mb-5">
        <h3 class="mb-5 font-black text-lg uppercase">To Do</h3>

        <TodoList :is-list="isList" :todos="todos.activeTodos.value" />
      </div>

      <div>
        <h3 class="mb-5 font-black text-lg uppercase">Completed</h3>

        <TodoList :is-list="isList" :todos="todos.completeTodos.value" />
      </div>
    </div>
  </div>
</template>
