import { TaskStatus } from "../../types/index.ts"
import type { TaskItemProps } from "../../types/index.ts"

const priorityColors = {
    low: 'text-green-600',
    medium: 'text-yellow-600',
    high: 'text-red-600',
}

const statusColors = {
    'pending': 'bg-yellow-100  text-yellow-800',
    'in-progress': 'bg-blue-100  text-blue-800',
    'completed': 'bg-green-100  text-green-800',
};


function TaskItem ({ task, onStatusChange, onDelete }: TaskItemProps) {

    return(
         <li className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-3 hover:shadow-md transition-shadow">
          <div className="flex-1">
            <strong className="block">{task.title}</strong>
            <p className="text-sm text-gray-500">{task.description}</p>
            <div className="flex gap-3 mt-1 text-sm">
                <span className={priorityColors[task.priority]}>Priority: {task.priority}</span>
                <span className="text-gray-400">Due: {task.dueDate}</span>
            </div>
          </div>
          <select
              value={task.status}
              onChange={(event) => onStatusChange(task.id, event.target.value as TaskStatus)}
              className={`rounded px-2 py-1 mx-2 text-sm font-medium ${statusColors[task.status]}`}
          >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
          </select>
          <button
              onClick={()=> onDelete(task.id)}
              className="text-red-500 hover:text-red-700 px-3 py-1 text-sm font-medium"
          >
            Delete
          </button>
        </li>
    );
}
export default TaskItem;


