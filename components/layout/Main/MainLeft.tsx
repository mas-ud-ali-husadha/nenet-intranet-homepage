import React from 'react';
import Greeting from '@/components/homepage/greeting';
import Task from '@/components/homepage/Task/task';
import PerformanceChart from '@/components/homepage/performance-chart';
import MonthlyOrdersCard from '@/components/homepage/stats';
import QuickLinks from '@/components/homepage/quick-links';
import Spaces from '@/components/homepage/spaces';

const Main = () => {
  return (
    <div className="flex flex-col gap-10 mt-14 px-5 md:px-10 py-4 ">
      <div className="pt-6 flex flex-col">
        <Greeting />
        <p className="text-xs max-w-xs leading-5 ">
          Here is an online platform that provides employees with access to
          tools, information, and communication channels needed to work
          efficiently.
        </p>
        <Task />
      </div>
      <QuickLinks />
      <Spaces />
      <MonthlyOrdersCard />
      <PerformanceChart />
    </div>
  );
};

export default Main;
