<script setup lang="ts">
import { Todo } from "~~/types/todo.js";

const { todo } = defineProps<{ todo: Todo }>();
</script>

<template>
  <p>
    {{ todo.task }}
  </p>
</template>
