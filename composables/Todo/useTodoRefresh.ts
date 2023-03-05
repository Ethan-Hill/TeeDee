import type { Database } from "~/types/supabase";
import type { RealtimeChannel } from "@supabase/supabase-js";

import { useTodoFetch } from "./useTodoFetch";

export const useTodoRefresh = async () => {
  const client = useSupabaseClient<Database>();
  let realtimeChannel: RealtimeChannel;

  const { refresh: refreshTodos } = await useTodoFetch();

  realtimeChannel = client
    .channel("public:todos")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "todos" },
      () => refreshTodos()
    );
  realtimeChannel.subscribe();

  return realtimeChannel;
};
