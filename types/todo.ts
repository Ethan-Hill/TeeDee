export interface Todo {
  id: number;
  inserted_at: string;
  is_complete: boolean | null;
  task: string | null;
}
