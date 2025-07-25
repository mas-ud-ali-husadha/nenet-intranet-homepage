'use client';
import React, { useState } from 'react';
import { CardData } from '@/types/task';
import CardStack from '@/components/ui/card-stack';
import TaskDialog from './task-dialog';

const MockData: CardData[] = [
  {
    id: 'INTRA-201',
    title: 'Add Upcoming Events Widget',
    type: 'Task',
    priority: 'High',
    status: 'In Progress',
    assignee: {
      id: 1,
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      name: 'Alex Johnson',
      username: 'alexjohnson',
      birthday: '7/22',
      fallback: 'ER',
      social: {
        whatsapp: '#',
        linkedin: '#',
        discord: '#',
      },
    },
    storyPoints: 5,
    labels: ['frontend', 'feature'],
    description:
      'Implement a widget showing upcoming company events on the homepage.',
  },
  {
    id: 'INTRA-202',
    title: 'Fix broken links in HR section',
    type: 'Task',
    priority: 'Medium',
    status: 'In Progress',
    assignee: {
      id: 2,
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      name: 'Emma Wilson',
      fallback: 'EW',
      username: 'emmawilson',
      social: {
        whatsapp: '#',
        linkedin: '#',
        discord: '#',
      },
    },
    storyPoints: 2,
    labels: ['bug', 'content'],
    description:
      'Several links under the HR resources page are returning 404 errors.',
  },
  {
    id: 'INTRA-203',
    title: 'Add employee birthday highlight',
    type: 'Bug',
    priority: 'Low',
    status: 'In Progress',
    assignee: {
      id: 3,
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      name: 'Michael Torres',
      username: 'michaeltorres',
      fallback: 'MT',
      social: {
        whatsapp: '#',
        linkedin: '#',
        discord: '#',
      },
    },
    storyPoints: 1,
    labels: ['enhancement', 'engagement'],
    description: 'Display current week’s employee birthdays on the homepage.',
  },
  {
    id: 'INTRA-204',
    title: 'Redesign Quick Links section',
    type: 'Story',
    priority: 'Medium',
    status: 'In Progress',
    assignee: {
      id: 4,
      avatar:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
      name: 'Carlos Martinez',
      username: 'carlosmartinez',
      fallback: 'CM',
      social: {
        whatsapp: '#',
        linkedin: '#',
        discord: '#',
      },
    },
    storyPoints: 8,
    labels: ['design', 'UX'],
    description:
      'Improve layout and usability of the quick access links module.',
  },
  {
    id: 'INTRA-205',
    title: 'Add global search functionality',
    type: 'Bug',
    priority: 'High',
    status: 'To Do',
    assignee: {
      id: 5,
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      name: 'David Kim',
      username: 'davidkim',
      fallback: 'DK',
      social: {
        whatsapp: '#',
        linkedin: '#',
        discord: '#',
      },
    },
    storyPoints: 13,
    labels: ['feature', 'backend', 'frontend'],
    description:
      'Implement a global search bar for documents, people, and posts.',
  },
  {
    id: 'INTRA-206',
    title: 'Update company policy documents',
    type: 'Story',
    priority: 'Medium',
    status: 'To Do',
    assignee: {
      id: 6,
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      name: 'Lisa Rodriguez',
      username: 'lisarodriguez',
      fallback: 'LR',
      social: {
        whatsapp: '#',
        linkedin: '#',
        discord: '#',
      },
    },
    storyPoints: 3,
    labels: ['documentation'],
    description:
      'Replace outdated PDFs in the policy section with the latest versions.',
  },
];

const Task = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [selectedTaskIds, setSelectedTaskIds] = useState<string[]>([
    'INTRA-201',
    'INTRA-202',
    'INTRA-203',
    'INTRA-204',
  ]);
  const [projects, setProjects] = useState<CardData[]>(MockData);

  const selectedProjects = projects.filter((project) =>
    selectedTaskIds.includes(project.id)
  );

  const handleTaskToggle = (taskId: string) => {
    setSelectedTaskIds((prev) => {
      if (prev.includes(taskId)) {
        const newSelection = prev.filter((id) => id !== taskId);
        if (newSelection.length > 0) {
          const currentProjectId = selectedProjects[currentIndex]?.id;
          const newCurrentIndex = newSelection.indexOf(currentProjectId);
          setCurrentIndex(newCurrentIndex === -1 ? 0 : newCurrentIndex);
        } else {
          setCurrentIndex(0);
        }
        return newSelection;
      } else {
        return [...prev, taskId];
      }
    });

    // Toggle status between "In Progress" and "To Do"
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === taskId
          ? {
              ...project,
              status:
                project.status === 'In Progress' ? 'To Do' : 'In Progress',
            }
          : project
      )
    );
  };

  const selectAllTasks = () => {
    setSelectedTaskIds(projects.map((p) => p.id));
    setCurrentIndex(0);
  };

  const clearAllTasks = () => {
    setSelectedTaskIds([]);
    setCurrentIndex(0);
  };

  const nextCard = () => {
    if (selectedProjects.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % selectedProjects.length);
    }
  };

  return (
    <div className="flex flex-col gap-5 mt-5">
      <TaskDialog
        projects={projects}
        selectedTaskIds={selectedTaskIds}
        onTaskToggle={handleTaskToggle}
        onSelectAll={selectAllTasks}
        onClearAll={clearAllTasks}
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
      <div className="w-full md:w-[80%]">
        <div className="flex items-center justify-between mb-4">
          <h2 className=" font-medium text-sm">Projects in progress</h2>
          <div className="flex items-center gap-4">
            <div className=" text-sm">
              {selectedProjects.length > 0
                ? `${currentIndex + 1} / ${selectedProjects.length}`
                : '0 / 0'}
            </div>
          </div>
        </div>
        <CardStack
          projects={selectedProjects}
          currentIndex={currentIndex}
          onNext={nextCard}
        />
      </div>
    </div>
  );
};

export default Task;
