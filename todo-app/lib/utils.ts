import { Todo } from './types';
import { formatDistanceToNow, isToday, isTomorrow, isPast } from 'date-fns';

export const getPriorityColor = (priority: string): string => {
  switch (priority) {
    case 'high':
      return 'text-red-600 bg-red-50';
    case 'medium':
      return 'text-yellow-600 bg-yellow-50';
    case 'low':
      return 'text-green-600 bg-green-50';
    default:
      return 'text-gray-600 bg-gray-50';
  }
};

export const getPriorityBadgeColor = (priority: string): string => {
  switch (priority) {
    case 'high':
      return 'badge-danger';
    case 'medium':
      return 'badge-warning';
    case 'low':
      return 'badge-success';
    default:
      return 'badge-primary';
  }
};

export const formatDueDate = (date: string | null): string => {
  if (!date) return 'No due date';
  
  const dueDate = new Date(date);
  
  if (isToday(dueDate)) {
    return 'Today';
  }
  
  if (isTomorrow(dueDate)) {
    return 'Tomorrow';
  }
  
  if (isPast(dueDate)) {
    return `Overdue by ${formatDistanceToNow(dueDate)}`;
  }
  
  return `Due in ${formatDistanceToNow(dueDate)}`;
};

export const getDueDateColor = (date: string | null, completed: boolean): string => {
  if (completed || !date) return 'text-gray-500';
  
  const dueDate = new Date(date);
  
  if (isPast(dueDate)) {
    return 'text-red-500';
  }
  
  if (isToday(dueDate)) {
    return 'text-orange-500';
  }
  
  if (isTomorrow(dueDate)) {
    return 'text-yellow-500';
  }
  
  return 'text-gray-500';
};

export const generateRandomColor = (): string => {
  const colors = [
    'bg-red-100 text-red-800',
    'bg-blue-100 text-blue-800',
    'bg-green-100 text-green-800',
    'bg-yellow-100 text-yellow-800',
    'bg-purple-100 text-purple-800',
    'bg-pink-100 text-pink-800',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const sortTodosByDate = (todos: Todo[]): Todo[] => {
  return [...todos].sort((a, b) => {
    // Incomplete todos first
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }
    
    // By priority
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    const priorityDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
    if (priorityDiff !== 0) return priorityDiff;
    
    // By due date
    if (a.dueDate && b.dueDate) {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    }
    
    if (a.dueDate) return -1;
    if (b.dueDate) return 1;
    
    // By creation date
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
};
