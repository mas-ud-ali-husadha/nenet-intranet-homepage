import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EventCardProps, EventInterface } from '@/types/event';
import Image from 'next/image';

const EventCard = ({ event }: EventCardProps) => (
  <div className="px-6 pt-5 mx-auto">
    <div className="flex items-start gap-4 mb-6">
      <div className="w-15 h-15 rounded-xl overflow-hidden flex-shrink-0">
        <Image
          width={300}
          height={300}
          src={event.image}
          alt={event.title}
        />
      </div>
      <div className="flex-1">
        <h2 className="text-sm font-semibold mb-1">{event.title}</h2>
        <p className="text-xs text-desc mb-2 line-clamp-2 leading-tight">
          {event.description}
        </p>
      </div>
    </div>

    <div className="grid grid-cols-3 mb-6 divide-x divide-btn">
      <div className="text-center">
        <p className="text-sm font-bold  mb-1">{event.date}</p>
        <p className="text-desc text-sm">Date</p>
      </div>
      <div className="text-center">
        <p className="text-sm font-bold mb-1">{event.time}</p>
        <p className="text-desc  text-sm">Time</p>
      </div>
      <div className="text-center">
        <p className="text-sm font-bold  mb-1">{event.invited}</p>
        <p className="text-desc  text-sm">Invited</p>
      </div>
    </div>
  </div>
);

const Events = () => {
  const sampleEvents: {
    ongoing: EventInterface[];
    upcoming: EventInterface[];
    finished: EventInterface[];
  } = {
    ongoing: [
      {
        id: 1,
        image:
          'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=400&fit=crop&crop=center',
        title: 'Q3 All Hands Meeting',
        date: '22 Jul',
        time: '14:00',
        invited: '150',
        description:
          'Quarterly company-wide meeting to discuss Q3 results, upcoming initiatives, and team updates. Join us in the main auditorium or via Teams.',
      },
      {
        id: 2,
        image:
          'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=400&fit=crop&crop=center',
        title: 'Innovation Workshop',
        date: '22 Jul',
        time: '10:00',
        invited: '25',
        description:
          'Interactive brainstorming session focused on emerging technologies and process improvements. Bring your ideas and creativity!',
      },
    ],
    upcoming: [
      {
        id: 3,
        image:
          'https://images.unsplash.com/photo-1559223607-a43c990c692c?w=400&h=400&fit=crop&crop=center',
        title: 'Team Building Retreat',
        date: '15 Aug',
        time: '09:00',
        invited: '45',
        description:
          'Full-day team building activities including outdoor challenges, workshops, and networking lunch. Transportation provided to Mountain View Resort.',
      },
      {
        id: 4,
        image:
          'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=400&fit=crop&crop=center',
        title: 'Cybersecurity Training',
        date: '28 Aug',
        time: '13:30',
        invited: '80',
        description:
          'Mandatory security awareness training covering phishing prevention, password best practices, and data protection policies. Certificate provided upon completion.',
      },
    ],
    finished: [
      {
        id: 5,
        image:
          'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=400&fit=crop&crop=center',
        title: 'New Employee Orientation',
        date: '10 Jul',
        time: '09:00',
        invited: '12',
        description:
          'Welcome session for new hires covering company culture, policies, benefits overview, and office tour. Includes meet-and-greet with department heads.',
      },
      {
        id: 6,
        image:
          'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop&crop=center',
        title: 'Product Launch Celebration',
        date: '5 Jul',
        time: '17:00',
        invited: '200',
        description:
          'Celebration event for the successful launch of our new platform. Evening reception with presentations, networking, and refreshments in the main lobby.',
      },
    ],
  };

  const renderEventList = (events: EventInterface[]) => {
    if (events.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-gray-500">No events found</p>
        </div>
      );
    }

    return (
      <div className="divide-y divide-sidebar">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4 ">
        <h1 className="font-medium ">Event</h1>
      </div>
      <div className="mx-auto">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3  bg-sidebar rounded-xl h-10">
            <TabsTrigger
              value="ongoing"
              className="rounded-lg data-[state=active]:bg-btn data-[state=active]:text-white data-[state=active]:shadow-sm font-medium"
            >
              Ongoing
            </TabsTrigger>
            <TabsTrigger
              value="upcoming"
              className="rounded-lg data-[state=active]:bg-btn data-[state=active]:text-white data-[state=active]:shadow-sm font-medium"
            >
              Upcoming
            </TabsTrigger>
            <TabsTrigger
              value="finished"
              className="rounded-lg data-[state=active]:bg-btn data-[state=active]:text-white data-[state=active]:shadow-sm font-medium"
            >
              Finished
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ongoing" className="mt-0">
            {renderEventList(sampleEvents.ongoing)}
          </TabsContent>
          <TabsContent value="upcoming" className="mt-0">
            {renderEventList(sampleEvents.upcoming)}
          </TabsContent>
          <TabsContent value="finished" className="mt-0">
            {renderEventList(sampleEvents.finished)}
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Events;
