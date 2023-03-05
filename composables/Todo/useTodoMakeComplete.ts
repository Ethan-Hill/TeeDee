import type { Database } from "~/types/supabase";
export const useTodoComplete = async (todoID: number) => {
  const client = useSupabaseClient<Database>();

  const { data: todoMakeComplete } = await useAsyncData(
    "todoMakeComplete",
    async () => {
      const { data } = await client
        .from("todos")
        .update({ is_complete: true })
        .eq("id", todoID);
      return data;
    }
  );

  return todoMakeComplete;
};
