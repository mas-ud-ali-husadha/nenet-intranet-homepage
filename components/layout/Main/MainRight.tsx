import NewsAnnouncement from '@/components/homepage/news-announcement';
import Schedules from '@/components/homepage/schedule';
import TopPerformers from '@/components/homepage/top-performers';
import UpcomingEvents from '@/components/homepage/events';
import WeeklyProgress from '@/components/homepage/weekly-progress';
import React from 'react';

const MainRight = () => {
  return (
    <div className="z-30 flex-auto w-full px-5 md:px-7 pb-5 lg:mt-14">
      <div className="lg:-ml-80 mt-8 pt-1 flex flex-col-reverse md:flex-row gap-4">
        <WeeklyProgress />
        <NewsAnnouncement />
      </div>
      <Schedules />
      <UpcomingEvents />
      <TopPerformers />
    </div>
  );
};

export default MainRight;
