import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

type Performer = {
  id: number;
  image: string;
  name: string;
  score: string;
  change: string;
  rank: number;
  role: string;
  fallback: string;
};

type PerformerCardProps = {
  performer: Performer;
};

const PerformerCard = ({ performer }: PerformerCardProps) => (
  <div className="px-6 pt-5 mx-auto">
    <div className="flex items-center justify-center gap-4 mb-6">
      <Avatar className="w-15 h-15 rounded-xl overflow-hidden flex-shrink-0">
        <AvatarImage src={performer.image} alt={performer.name} />
        <AvatarFallback className="rounded-2xl">
          {performer.fallback}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <h2 className="text-sm font-semibold mb-1">{performer.name}</h2>
        <p className="text-xs text-desc mb-2 line-clamp-2 leading-tight">
          {performer.role}
        </p>
      </div>
      <div className="text-center">
        <p className="text-sm font-bold mb-1">{performer.score}</p>
        <p className="text-desc text-sm">Score</p>
      </div>
      <div className="text-center">
        <p className="text-sm font-bold mb-1">{performer.change}</p>
        <p className="text-desc text-sm">Change</p>
      </div>
    </div>
  </div>
);

const TopPerformers = () => {
  const samplePerformers: {
    allTime: Performer[];
    last30Days: Performer[];
    thisWeek: Performer[];
    today: Performer[];
  } = {
    allTime: [
      {
        id: 1,
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        name: 'Alex Johnson',
        role: 'Senior Engineer',
        fallback: 'AJ',
        score: '98.5',
        change: '+2.3',
        rank: 1,
      },
      {
        id: 2,
        image:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        name: 'Emma Wilson',
        fallback: 'EW',
        role: 'Product Manager',
        score: '96.2',
        change: '+1.8',
        rank: 2,
      },
      {
        id: 3,
        image:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        name: 'Michael Torres',
        fallback: 'MT',
        role: 'UX Designer',
        score: '94.7',
        change: '+0.5',
        rank: 3,
      },
    ],
    last30Days: [
      {
        id: 4,
        image:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        name: 'Emma Wilson',
        fallback: 'EW',
        role: 'Product Manager',
        score: '97.3',
        change: '+4.2',
        rank: 1,
      },
      {
        id: 5,
        image:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
        name: 'David Kim',
        fallback: 'DK',
        role: 'Backend Developer',
        score: '95.8',
        change: '+3.7',
        rank: 2,
      },
      {
        id: 6,
        image:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
        name: 'Lisa Rodriguez',
        fallback: 'LR',
        role: 'Data Analyst',
        score: '93.4',
        change: '+2.1',
        rank: 3,
      },
    ],
    thisWeek: [
      {
        id: 7,
        image:
          'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
        name: 'Ryan Mitchell',
        fallback: 'RM',
        role: 'DevOps Engineer',
        score: '99.1',
        change: '+5.8',
        rank: 1,
      },
      {
        id: 8,
        image:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
        name: 'Jessica Park',
        fallback: 'JP',
        role: 'Frontend Developer',
        score: '96.5',
        change: '+4.3',
        rank: 2,
      },
      {
        id: 9,
        image:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
        name: 'Lisa Rodriguez',
        fallback: 'LR',
        role: 'Data Analyst',
        score: '92.4',
        change: '+4.1',
        rank: 3,
      },
    ],
    today: [
      {
        id: 10,
        image:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
        name: 'Amanda Foster',
        fallback: 'AF',
        role: 'CTO',
        score: '100.0',
        change: '+8.5',
        rank: 1,
      },
      {
        id: 11,
        image:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
        name: 'Carlos Martinez',
        fallback: 'CM',
        role: 'Team Lead',
        score: '97.8',
        change: '+6.2',
        rank: 2,
      },
      {
        id: 12,
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        name: 'Alex Johnson',
        fallback: 'AJ',
        role: 'Senior Engineer',
        score: '95.3',
        change: '+3.9',
        rank: 3,
      },
    ],
  };

  const renderPerformerList = (performers: Performer[]) => {
    if (performers.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-gray-500">No performers found</p>
        </div>
      );
    }

    return (
      <div className="divide-y divide-sidebar">
        {performers.map((performer) => (
          <PerformerCard key={performer.id} performer={performer} />
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="flex items-center mt-4 justify-between mb-4">
        <h1 className="font-medium">Top Performers</h1>
      </div>
      <div className="mx-auto">
        <Tabs defaultValue="thisWeek" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-sidebar rounded-xl h-10">
            <TabsTrigger
              value="allTime"
              className="rounded-lg data-[state=active]:bg-btn data-[state=active]:text-white data-[state=active]:shadow-sm font-medium"
            >
              All Time
            </TabsTrigger>
            <TabsTrigger
              value="last30Days"
              className="rounded-lg data-[state=active]:bg-btn data-[state=active]:text-white data-[state=active]:shadow-sm font-medium"
            >
              Last 30 Days
            </TabsTrigger>

            <TabsTrigger
              value="thisWeek"
              className="rounded-lg data-[state=active]:bg-btn data-[state=active]:text-white data-[state=active]:shadow-sm font-medium"
            >
              This Week
            </TabsTrigger>
            <TabsTrigger
              value="today"
              className="rounded-lg data-[state=active]:bg-btn data-[state=active]:text-white data-[state=active]:shadow-sm font-medium"
            >
              Today
            </TabsTrigger>
          </TabsList>

          <TabsContent value="allTime" className="mt-0">
            {renderPerformerList(samplePerformers.allTime)}
          </TabsContent>
          <TabsContent value="last30Days" className="mt-0">
            {renderPerformerList(samplePerformers.last30Days)}
          </TabsContent>
          <TabsContent value="thisWeek" className="mt-0">
            {renderPerformerList(samplePerformers.thisWeek)}
          </TabsContent>
          <TabsContent value="today" className="mt-0">
            {renderPerformerList(samplePerformers.today)}
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default TopPerformers;
