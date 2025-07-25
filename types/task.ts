import { UserInterface } from './user';

export interface Avatar {
  name: string;
  image: string;
}

export interface Project {
  id: number;
  title: string;
  date: string;
  activeTab: string;
  comments: number;
  files: number;
  status: string;
  priority: string;
  avatars: Avatar[];
}

export interface TaskDialogProps {
  projects: CardData[];
  selectedTaskIds: string[];
  onTaskToggle: (taskId: string) => void;
  onSelectAll: () => void;
  onClearAll: () => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export type TaskType = 'Bug' | 'Story' | 'Task';
export type Priority = 'Highest' | 'High' | 'Medium' | 'Low' | 'Lowest';
export type Status = 'To Do' | 'In Progress' | 'Done' | 'Blocked';

export interface Assignee {
  name: string;
  avatar: string;
  color: string;
}

export interface TaskCardProps {
  id?: string;
  title?: string;
  type?: TaskType;
  priority?: Priority;
  status?: Status;
  assignee?: UserInterface;
  storyPoints?: number;
  labels?: string[];
  description?: string;
  onClick?: () => void;
}

export interface CardData {
  id: string;
  title: string;
  type: TaskType;
  priority: Priority;
  status: Status;
  assignee: UserInterface;
  storyPoints: number;
  labels: string[];
  description: string;
}
