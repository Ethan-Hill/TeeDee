<script setup lang="ts">
import { useTodoCreate } from "~~/composables/Todo/useTodoCreate";

// const openModal = useEvent("modalOpen");

const open = ref(false);
const modal = ref(null);

const createTask = async (fields: { task: string }) => {
  const createTask = await useTodoCreate(fields.task);
  open.value = false;

  return createTask;
};
onClickOutside(modal, () => {
  open.value = false;
});
</script>

<template>
  <button
    class="flex justify-center items-center p-2 text-green-400 bg-zinc-600 hover:bg-zinc-800 rounded-lg transition-colors absolute top-5 right-5"
    @click="open = true"
  >
    <Icon name="carbon:add" /><span class="sr-only">Create task</span>
  </button>

  <Teleport to="body">
    <transition-fade tag="div" appear>
      <div v-if="open" class="absolute top-2/4 left-1/2 z-30">
        <TodoAddOverlay />

        <TodoAddModal
          :open="open"
          :create-task="createTask"
          @close-modal="open = false"
          ref="modal"
        />
      </div>
    </transition-fade>
  </Teleport>
</template>

<style lang="scss">
.formkit-form {
  font-family: "Nunito Sans";

  .formkit-wrapper {
    max-width: 100%;
  }

  .formkit-input {
    color: white;
  }

  .formkit-message {
    color: rgb(248 113 113 / var(--tw-text-opacity));
    margin-top: 10px;
  }

  > .formkit-messages {
    display: none;
  }
}
</style>
