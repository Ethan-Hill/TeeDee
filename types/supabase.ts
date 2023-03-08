export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      todos: {
        Row: {
          active_index: number
          id: number
          inserted_at: string
          is_complete: boolean | null
          task: string | null
        }
        Insert: {
          active_index?: number
          id?: number
          inserted_at?: string
          is_complete?: boolean | null
          task?: string | null
        }
        Update: {
          active_index?: number
          id?: number
          inserted_at?: string
          is_complete?: boolean | null
          task?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
