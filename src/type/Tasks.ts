export interface Task {
  id?: string;
  title: string;
  description?: string;
  status?: "pending" | "progress" | "complete";
  priority?: "low" | "medium" | "high";
  deadline: string
}
