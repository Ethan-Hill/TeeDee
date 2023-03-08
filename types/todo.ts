export interface Todo {
  id: number;
  active_index: number;
  inserted_at: string;
  is_complete: boolean | null;
  task: string | null;
}
