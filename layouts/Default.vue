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

<style>
.page-enter-active {
  transition: all 0.1s ease-out;
}
.page-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.page-enter-from,
.page-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.layout-enter-active {
  transition: all 0.1s ease-out;
}
.layout-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.layout-enter-from,
.layout-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
