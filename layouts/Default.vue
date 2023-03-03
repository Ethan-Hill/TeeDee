<script setup lang="ts">
import type { Database } from "~/types/supabase";
import type { RealtimeChannel } from "@supabase/supabase-js";
const client = useSupabaseClient<Database>();
let realtimeChannel: RealtimeChannel;

const { refresh: refreshTodos } = await useAsyncData("todos", async () => {
  const { data } = await client.from("todos").select();
  return data;
});

onMounted(() => {
  realtimeChannel = client
    .channel("public:todos")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "todos" },
      () => refreshTodos()
    );
  realtimeChannel.subscribe();
});

onUnmounted(() => {
  client.removeChannel(realtimeChannel);
});
</script>

<template>
  <div class="bg-zinc-800 h-screen text-white flex items-center justify-center">
    <SeoKit />
    <NuxtPage />
  </div>
</template>
