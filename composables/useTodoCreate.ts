import type { Database } from "~/types/supabase";
export const useTodoCreate = async (task: string) => {
  const client = useSupabaseClient<Database>();

  const { data: todoCreate } = await useAsyncData("todoCreate", async () => {
    const { data } = await client.from("todos").insert([{ task: task }]);
    return data;
  });

  return todoCreate;
};
