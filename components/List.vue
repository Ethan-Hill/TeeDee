<script setup lang="ts">
const todos = await useTodoFetch();
</script>

<template>
  <div
    class="sm:rounded-xl p-6 hover:ring-0 shadow-none bg-zinc-900 h-full lg:w-1/2 sm:w-3/4 w-11/12 relative"
  >
    <h2 class="mb-10 font-black text-xl uppercase text-center">Todo list</h2>

    <TodoAdd />

    <div class="mb-5">
      <h3 class="mb-5 font-black text-lg uppercase">To Do</h3>

      <transition-expand
        appear
        group
        class="flex flex-col gap-3"
        tag="ul"
        mode="out-in"
      >
        <ListItem
          :todo="todo"
          :key="todo.id"
          v-for="todo in todos?.filter((item) => !item.is_complete)"
        />
      </transition-expand>
    </div>

    <div>
      <h3 class="mb-5 font-black text-lg uppercase">Completed</h3>
      <transition-expand appear group tag="div" mode="out-in">
        <ul
          class="flex flex-col gap-3"
          v-if="todos!.filter((item) => item.is_complete).length > 0"
        >
          <ListItem
            :todo="todo"
            :key="todo.id"
            v-for="todo in todos?.filter((item) => item.is_complete)"
          />
        </ul>
      </transition-expand>
    </div>
  </div>
</template>
