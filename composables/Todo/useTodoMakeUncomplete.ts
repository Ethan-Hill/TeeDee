import type { Database } from "~/types/supabase";
export const useTodoUncomplete = async (todoID: number) => {
  const client = useSupabaseClient<Database>();

  const { data: todoMakeUnomplete } = await useAsyncData(
    "todoMakeComplete",
    async () => {
      const { data } = await client
        .from("todos")
        .update({ is_complete: false })
        .eq("id", todoID);
      return data;
    }
  );

  return todoMakeUnomplete;
};
