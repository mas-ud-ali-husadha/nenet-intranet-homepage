'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';

import { TaskDialogProps } from '@/types/task';
import TaskCard from '@/components/ui/card-task';
import { X } from 'lucide-react';

const TaskDialog = ({
  projects,
  selectedTaskIds,
  onTaskToggle,
  onSelectAll,
  onClearAll,
  isOpen,
  onOpenChange,
}: TaskDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className="w-fit rounded-full">Show current tasks</Button>
      </DialogTrigger>
      <DialogContent className=" max-h-[80vh] overflow-y-auto bg-sidebar">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Select Tasks</span>
            <div className="flex gap-2 items-center">
              <Button size="sm" onClick={onSelectAll} className="text-xs">
                Select All
              </Button>
              <Button size="sm" onClick={onClearAll} className="text-xs">
                Clear All
              </Button>
              <DialogClose asChild>
                <Button size="sm" className="rounded-full h-10 w-10">
                  <X size={20} />
                </Button>
              </DialogClose>
            </div>
          </DialogTitle>
          <p className="text-sm text-gray-600">
            {selectedTaskIds.length} of {projects.length} tasks selected
          </p>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project) => (
            <TaskCard
              key={project.id}
              {...project}
              onClick={() => onTaskToggle(project.id)}
              selectedTaskIds={selectedTaskIds.includes(project.id)}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDialog;
