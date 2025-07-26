import React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import UserCard from '../ui/user-card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
const Schedules = () => {
  const scheduleItems = [
    {
      time: '13:00',
      title: 'Marketing Strategy Presentation',
      department: 'Marketing',
      user: {
        id: 1,
        name: 'Ryan Mitchell',
        avatar:
          'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
        birthday: '7/22',
        fallback: 'RY',
        social: {
          whatsapp: '#',
          linkedin: '#',
          discord: '#',
        },
      },
    },
    {
      time: '14:00',
      title: 'HR Policy Update Session',
      department: 'Human Resources',
      user: {
        name: 'Jessica Park',
        avatar:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
        birthday: '7/22',
        fallback: 'JP',
        social: {
          whatsapp: '#',
          linkedin: '#',
          discord: '#',
        },
      },
    },
    {
      time: '16:00',
      title: 'Customer Feedback Analysis',
      department: 'Customer Support',
      user: {
        name: 'David Kim',
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
        birthday: '7/22',
        fallback: 'DK',
        social: {
          whatsapp: '#',
          linkedin: '#',
          discord: '#',
        },
      },
    },
    {
      time: '17:00',
      title: 'Financial Reporting Session',
      department: 'Finance',
      user: {
        name: 'Alex Johnson',
        avatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        birthday: '7/22',
        fallback: 'AJ',
        social: {
          whatsapp: '#',
          linkedin: '#',
          discord: '#',
        },
      },
    },
  ];

  return (
    <div className="mx-auto my-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-medium ">Schedule</h1>
      </div>

      {/* Schedule Items */}
      <div className="">
        {scheduleItems.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            {/* Time */}
            <div className="flex-shrink-0 w-16 text-right">
              <span className="text-sm font-medium">{item.time}</span>
            </div>

            {/* Timeline with dot and line */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className={`w-2 h-2 rounded-full bg-gray-600 dark:bg-neutral-400 mt-2 z-10`}></div>
              {index < scheduleItems.length - 1 && (
                <div className="w-px border h-12 border-gray-300 dark:border-neutral-700 border-dashed mt-2"></div>
              )}
            </div>

            {/* Content */}
            <div className={`flex-1 px-1 py-2 flex flex-col justify-center`}>
              <h2 className="font-medium text-sm leading-tight mb-1">
                {item.title}
              </h2>
              <p className="text-xs text-desc">{item.department}</p>
            </div>

            <Tooltip>
              <TooltipTrigger asChild>
                <Avatar
                  className={`w-10 h-10 mt-2 border border-btn rounded-full flex items-center justify-center text-xs font-semibold`}
                >
                  <AvatarImage
                    src={item.user.avatar}
                    alt={`@${item.user.name}`}
                  />
                  <AvatarFallback>{item.user.fallback}</AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>
                <UserCard border custom_desc="Reporter" user={item.user} />
              </TooltipContent>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedules;
