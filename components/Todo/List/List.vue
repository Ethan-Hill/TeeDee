<script setup lang="ts">
const props = defineProps<{ todos: any; isList: boolean }>();

// Alphabetical Todos
const sortedTodos = computed(() => {
  return [...props.todos].sort((a, b) => a.task.localeCompare(b.task));
});
</script>

<template>
  <transition-fade
    appear
    group
    class="flex flex-col gap-3"
    tag="ul"
    v-if="props.isList"
  >
    <TodoListItem :todo="item" v-for="item in sortedTodos" />
  </transition-fade>

  <transition-fade
    appear
    group
    tag="ul"
    v-else
    class="grid md:grid-cols-2 lg:grid-cols-3 gap-3"
  >
    <TodoListItem :todo="item" v-for="item in sortedTodos" />
  </transition-fade>
</template>
