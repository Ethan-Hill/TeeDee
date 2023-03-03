import type { Database } from "~/types/supabase";
export const useTodoFetch = async () => {
  const client = useSupabaseClient<Database>();

  const { data: todos, refresh } = await useAsyncData("todos", async () => {
    const { data } = await client.from("todos").select();
    return data;
  });

  return { todos, refresh };
};
