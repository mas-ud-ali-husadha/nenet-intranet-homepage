'use client';

import CardStats, { ChartEntry } from '@/components/ui/card-stats';
import { ClipboardPen, User } from 'lucide-react';
import React from 'react';

const projectsCompleted: ChartEntry[] = [
  { label: 'Feb', value: 3 },
  { label: 'Mar', value: 5 },
  { label: 'Apr', value: 6 },
  { label: 'May', value: 4 },
  { label: 'Jun', value: 7 },
];

const newHires: ChartEntry[] = [
  { label: 'Feb', value: 2 },
  { label: 'Mar', value: 4 },
  { label: 'Apr', value: 3 },
  { label: 'May', value: 5 },
  { label: 'Jun', value: 1 },
];

const PerformanceChart = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-base font-medium">Stats</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <CardStats
          title="Project completed"
          icon={<ClipboardPen size={16} />}
          stat={25}
          chartData={projectsCompleted}
        />
        <CardStats
          title="New hires"
          icon={<User size={16} />}
          stat={15}
          chartData={newHires}
          barColor="var(--color-chart-last-month)"
        />
      </div>
    </div>
  );
};

export default PerformanceChart;
