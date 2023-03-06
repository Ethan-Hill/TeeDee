<script setup lang="ts">
import type { RealtimeChannel } from "@supabase/supabase-js";

import { useTodoRefresh } from "~~/composables/Todo/useTodoRefresh";
import { useTodoRemoveChannel } from "~~/composables/Todo/useTodoRemoveChannel";

let realtimeChannel: RealtimeChannel;

onMounted(async () => {
  realtimeChannel = await useTodoRefresh();
});

onUnmounted(async () => {
  await useTodoRemoveChannel(realtimeChannel);
});
</script>

<template>
  <div
    class="bg-zinc-800 min-h-screen text-white flex justify-center items-center"
  >
    <SeoKit />
    <NuxtPage />
  </div>
</template>
