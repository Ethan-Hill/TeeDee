<script setup lang="ts">
const { createTask, open } = defineProps<{
  createTask: (fields: { task: string }) => Promise<globalThis.Ref<null>>;
  open: boolean;
}>();

onMounted(() => {
  const input: HTMLElement | null = document.getElementById("task");

  input?.focus();
});
</script>

<template>
  <div
    class="z-20 sm:rounded-xl p-6 shadow-none bg-zinc-900 todo-list absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-[750px] w-[280px] text-white"
    ref="modal"
  >
    <h3 class="text-xl font-bold mb-10">Lets make a task</h3>

    <button
      class="flex justify-center items-center p-2 text-white bg-zinc-600 hover:bg-zinc-800 rounded-lg transition-colors absolute top-5 right-5"
      @click="$emit('closeModal')"
    >
      <Icon name="carbon:close" /><span class="sr-only">Close</span>
    </button>

    <FormKit type="form" @submit="createTask">
      <FormKit
        type="textarea"
        name="task"
        id="task"
        validation="required"
        label="Task description"
        placeholder="Touch grass"
      />
    </FormKit>
  </div>
</template>
