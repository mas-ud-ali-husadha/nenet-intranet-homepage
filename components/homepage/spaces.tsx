import { ChevronRight, Laptop2, Mic, Paperclip, User2 } from 'lucide-react';
import React from 'react';
import CardSpaces from '../ui/card-spaces';
import Link from 'next/link';

const mockData = [
  {
    id: 1,
    icon: Mic,
    title: 'Company Announcement',
    description: 'Get the latest company news, updates ,and annoucements.',
  },
  {
    id: 2,
    icon: User2,
    title: 'Human Resources',
    description:
      'A space dedicated to all your human resources needs and question.',
  },
  {
    id: 3,
    icon: Laptop2,
    title: 'Information Technology',
    description: 'Submit your help desk and tech questions here.',
  },
  {
    id: 4,
    icon: Paperclip,
    title: 'Paris Office',
    description: 'Collaboration and communcations space for the Paris office',
  },
];

const Spaces = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-base font-medium">Spaces</h2>
        <Link href="#" className="text-xs flex gap-1 items-center justify-center">
          View more <ChevronRight size={15} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {mockData.map(({ icon: Icon, ...item }) => (
          <CardSpaces key={item.id} icon={<Icon />} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Spaces;
