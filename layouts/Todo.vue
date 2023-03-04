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

// useSchemaOrg([
//   definePerson({
//     name: "Ethan Hill",
//     image: "/me.jpeg",
//     sameAs: ["https://github.com/ethan-hill"],
//   }),
//   defineWebPage({

//   }),
// ]);
</script>

<template>
  <div class="bg-zinc-800 min-h-screen text-white flex flex-col">
    <SeoKit />
    <MasterHeader />
    <NuxtPage />
  </div>
</template>
