import React from 'react';
import {
  CheckCircle,
  Circle,
  AlertCircle,
  ArrowUp,
  ArrowDown,
  Minus,
} from 'lucide-react';
import { Priority, Status, TaskCardProps, TaskType } from '@/types/task';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';
import UserCard from './user-card';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

const TaskCard = ({
  id,
  title,
  type = 'Story',
  priority = 'High',
  status = 'In Progress',
  assignee,
  storyPoints,
  labels,
  description,
  onClick,
  selectedTaskIds = true,
}: TaskCardProps & { selectedTaskIds?: boolean }) => {
  const getTypeIcon = (type: TaskType): React.ReactElement => {
    switch (type.toLowerCase()) {
      case 'bug':
        return <Circle className="w-4 h-4 text-red-500" />;
      case 'story':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'task':
        return <AlertCircle className="w-4 h-4 text-blue-500" />;
      default:
        return <Circle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getPriorityIcon = (priority: Priority): React.ReactElement => {
    switch (priority.toLowerCase()) {
      case 'highest':
        return <ArrowUp className="w-4 h-4 text-red-600" />;
      case 'high':
        return <ArrowUp className="w-4 h-4 text-red-500" />;
      case 'medium':
        return <Minus className="w-4 h-4 text-yellow-500" />;
      case 'low':
        return <ArrowDown className="w-4 h-4 text-green-500" />;
      case 'lowest':
        return <ArrowDown className="w-4 h-4 text-green-600" />;
      default:
        return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: Status): string => {
    switch (status.toLowerCase()) {
      case 'to do':
        return 'text-gray-800 dark:text-gray-400';
      case 'in progress':
        return 'text-blue-800 dark:text-blue-400';
      case 'done':
        return 'text-green-800 dark:text-green-400';
      case 'blocked':
        return 'text-red-800 dark:text-red-400';
      default:
        return 'text-gray-800 dark:text-gray-400';
    }
  };

  return (
    <div
      className={cn(
        `bg-card w-full rounded-lg shadow-md border-l-4 border-card-border hover:shadow-lg transition-shadow duration-200`,
        onClick ? 'cursor-pointer' : '',
        selectedTaskIds ? 'border-l-4 border-card-border' : 'border-none'
      )}
      onClick={onClick}
    >
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            {getTypeIcon(type)}
            <span className="text-xs font-medium uppercase">{type}</span>
          </div>
          <div className="flex items-center space-x-2">
            {getPriorityIcon(priority)}
            <span className="text-xs ">{id}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold mb-2 line-clamp-2 leading-tight">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-xs h-9 max-w-[90%] text-desc mb-3 line-clamp-2">
            {description}
          </p>
        )}

        {/* Labels */}
        {labels && labels.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {labels.map((label: string, index: number) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-sidebar rounded-full"
              >
                {label}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Status */}
            <span
              className={`px-2 py-1 text-xs rounded-full font-medium bg-sidebar ${getStatusColor(
                status
              )}`}
            >
              {status}
            </span>

            {/* Story Points */}
            {storyPoints && (
              <div className="flex items-center">
                <span className="text-xs bg-sidebar px-2 py-1 rounded">
                  {storyPoints} SP
                </span>
              </div>
            )}
          </div>

          {/* Assignee Avatar */}
          {assignee && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Avatar
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold`}
                >
                  <AvatarImage
                    src={assignee.avatar}
                    alt={`@${assignee.name}`}
                  />
                  <AvatarFallback>{assignee.fallback}</AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>
                <UserCard custom_desc="Reporter" border user={assignee} />
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
