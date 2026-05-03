import TaskItem from './TaskItem';
import type { TaskListProps } from '../../types/index.ts';

function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="text-gray-400 text-sm text-center py-6">No tasks found.</p>;
  }

  return (
    <ul className="flex flex-col gap-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;