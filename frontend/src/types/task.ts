export type TaskStatus = 'todo' | 'in_progress' | 'done';

export interface Task {
  id: number;
  title: string;
  description: string | null;
  status: TaskStatus;
  createdAt: string;
}

// TODO: Add CreateTaskDto type for POST endpoint
// export interface CreateTaskDto {
//   title: string;
//   description?: string;
// }
