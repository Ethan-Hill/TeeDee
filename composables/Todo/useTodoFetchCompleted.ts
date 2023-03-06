import type { Database } from "~/types/supabase";
export const useTodoFetchCompleted = async () => {
  const client = useSupabaseClient<Database>();

  const { data: completeTodos, refresh } = await useAsyncData(
    "completeTodos",
    async () => {
      const { data } = await client
        .from("todos")
        .select()
        .eq("is_complete", true);
      return data;
    }
  );

  return { completeTodos, refresh };
};
