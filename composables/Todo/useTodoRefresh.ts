import { useTodoFetchActive } from "./useTodoFetchActive";
import type { Database } from "~/types/supabase";
import type { RealtimeChannel } from "@supabase/supabase-js";

import { useTodoFetchCompleted } from "./useTodoFetchCompleted";

export const useTodoRefresh = async () => {
  const client = useSupabaseClient<Database>();
  let realtimeChannel: RealtimeChannel;

  let refreshTodos = computed(async () => {
    const { refresh: refreshActiveTodos } = await useTodoFetchActive();
    const { refresh: refreshCompletedTodos } = await useTodoFetchCompleted();
    return { refreshActiveTodos, refreshCompletedTodos };
  });

  const refreshTodosComputed = await refreshTodos.value;

  realtimeChannel = client
    .channel("public:todos")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "todos" },
      () => {
        refreshTodosComputed.refreshActiveTodos();
        refreshTodosComputed.refreshCompletedTodos();
      }
    );
  realtimeChannel.subscribe();

  return realtimeChannel;
};
