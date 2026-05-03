export enum TaskStatus {
  Pending = 'pending',
  InProgress = 'in-progress',
  Completed = 'completed',
}

export enum Priority {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
}

interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: Priority;
  dueDate: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;      
  onDelete: (taskId: string) => void;         
}

interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

interface TaskFilterProps {
  onFilterChange: (filters: {
    status?: TaskStatus;
    priority?: Priority;
  }) => void;
}

interface TaskFormProps {
  onAdd: (task: Task) => void;
}

export type { Task, User, TaskListProps, TaskItemProps, TaskFilterProps, TaskFormProps };
