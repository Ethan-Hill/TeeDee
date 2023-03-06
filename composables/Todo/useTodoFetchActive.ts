import type { Database } from "~/types/supabase";
export const useTodoFetchActive = async () => {
  const client = useSupabaseClient<Database>();

  const { data: activeTodos, refresh } = await useAsyncData(
    "todos",
    async () => {
      const { data } = await client
        .from("todos")
        .select()
        .eq("is_complete", false);
      return data;
    }
  );

  return { activeTodos, refresh };
};
