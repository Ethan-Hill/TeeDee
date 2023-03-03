import type { Database } from "~/types/supabase";
import type { RealtimeChannel } from "@supabase/supabase-js";

export default defineNuxtPlugin(async (nuxtApp) => {
  const client = useSupabaseClient<Database>();
  let realtimeChannel: RealtimeChannel;

  const { refresh: refreshTodos } = await useAsyncData("todos", async () => {
    return;
  });

  nuxtApp.hook("app:mounted", async () => {
    realtimeChannel = client
      .channel("public:todos")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "todos" },
        () => refreshTodos()
      );
    realtimeChannel.subscribe();
  });
});
