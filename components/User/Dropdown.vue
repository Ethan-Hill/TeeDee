<script setup lang="ts">
const { signOut } = useSession();
</script>

<template>
  <div
    class="absolute top-10 left-0 bg-zinc-600 w-40 rounded-md mt-2 py-2 px-3"
  >
    <button
      class="w-full hover:bg-zinc-700 transition-colors rounded-sm text-start px-2 py-1"
      @click="signOut()"
    >
      Logout
    </button>
  </div>
</template>
