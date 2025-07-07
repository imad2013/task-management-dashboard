'use client';

import { useState } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { openModal } from '@/lib/slices/uiSlice';
import { setSelectedTask } from '@/lib/slices/taskSlice';
import { deleteTask } from '@/lib/slices/taskSlice';
import { Task } from '@/lib/slices/taskSlice';
import {
  PencilIcon,
  TrashIcon,
  EyeIcon,
  CalendarIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

interface TaskCardProps {
  task: Task;
}

const priorityColors = {
  low: 'bg-green-100 text-green-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800',
};

const statusColors = {
  'todo': 'bg-gray-100 text-gray-800',
  'in-progress': 'bg-blue-100 text-blue-800',
  'completed': 'bg-green-100 text-green-800',
};

export default function TaskCard({ task }: TaskCardProps) {
  const dispatch = useAppDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const handleEdit = () => {
    dispatch(setSelectedTask(task));
    dispatch(openModal('taskForm'));
  };

  const handleView = () => {
    dispatch(setSelectedTask(task));
    dispatch(openModal('taskDetails'));
  };

  const handleDelete = () => {
    dispatch(setSelectedTask(task));
    dispatch(openModal('deleteConfirm'));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-medium text-gray-900 truncate">
            {task.title}
          </h3>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">
            {task.description}
          </p>
        </div>
        
        {isHovered && (
          <div className="flex items-center space-x-1 ml-2">
            <button
              onClick={handleView}
              className="p-1 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded"
              title="View details"
            >
              <EyeIcon className="h-4 w-4" />
            </button>
            <button
              onClick={handleEdit}
              className="p-1 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded"
              title="Edit task"
            >
              <PencilIcon className="h-4 w-4" />
            </button>
            <button
              onClick={handleDelete}
              className="p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded"
              title="Delete task"
            >
              <TrashIcon className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span
            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${priorityColors[task.priority]}`}
          >
            {task.priority}
          </span>
          <span
            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusColors[task.status]}`}
          >
            {task.status.replace('-', ' ')}
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center">
          <UserIcon className="h-4 w-4 mr-1" />
          <span className="truncate">{task.assignee}</span>
        </div>
        <div className="flex items-center">
          <CalendarIcon className="h-4 w-4 mr-1" />
          <span>{formatDate(task.dueDate)}</span>
        </div>
      </div>

      {task.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {task.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800"
            >
              {tag}
            </span>
          ))}
          {task.tags.length > 3 && (
            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
              +{task.tags.length - 3}
            </span>
          )}
        </div>
      )}
    </div>
  );
} 