import type { Database } from "~/types/supabase";
export const useTodoDelete = async (todoID: number) => {
  const client = useSupabaseClient<Database>();

  const { data: todoDelete } = await useAsyncData("todoDelete", async () => {
    const { data } = await client.from("todos").delete().eq("id", todoID);
    return data;
  });

  return todoDelete;
};
