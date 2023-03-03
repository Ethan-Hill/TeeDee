import type { Database } from "~/types/supabase";
import type { RealtimeChannel } from "@supabase/supabase-js";

export const useTodoRemoveChannel = async (
  realtimeChannel: RealtimeChannel
) => {
  const client = useSupabaseClient<Database>();

  client.removeChannel(realtimeChannel);

  return realtimeChannel;
};
