'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { CardData } from '@/types/task';
import TaskCard from './card-task';
import { useIsMobile } from '@/hooks/use-mobile';

interface CardStackProps {
  projects: CardData[];
  currentIndex: number;
  onNext: () => void;
}

const CardStack = ({ projects, currentIndex, onNext }: CardStackProps) => {
  const isMobile = useIsMobile();

  const maxVisibleCards = isMobile ? 1 : 4;

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg mb-2">No tasks selected</div>
        <p className="text-gray-400 text-sm">
          Please select tasks from the dialog to view them here
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {projects.map((project, index) => {
        const relativeIndex =
          (index - currentIndex + projects.length) % projects.length;

        if (relativeIndex >= maxVisibleCards) return null;

        const zIndex = maxVisibleCards - relativeIndex + 10;
        const translateX =
          relativeIndex === maxVisibleCards - 1
            ? relativeIndex * 49
            : relativeIndex * 50;
        const opacity =
          relativeIndex === 0 ? 1 : Math.max(1 - relativeIndex * 0.1);
        const scale =
          relativeIndex === 0 ? 1 : Math.max(1 - relativeIndex * 0.1);

        return (
          <div
            key={project.id}
            className="absolute w-full h-full transition-all duration-500 ease-in-out"
            style={{
              zIndex,
              transform: `translateX(${translateX}px) scale(${scale})`,
              opacity,
            }}
          >
            <TaskCard key={project.id} {...project} />
            {relativeIndex === 0 && projects.length > 1 && (
              <Button
                size="sm"
                aria-label='Next task'
                className="h-10 w-10 p-0 absolute top-15 right-5 bg-sidebar text-foreground hover:bg-chart"
                onClick={onNext}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        );
      })}

      {/* Spacer to maintain layout */}
      <div className="h-48 w-full opacity-0"></div>
    </div>
  );
};

export default CardStack;
