'use client';

import { Book, Globe, MessageCircle, Newspaper, User } from 'lucide-react';
import React from 'react';

const data = [
  {
    name: 'News',
    icon: Newspaper,
  },
  {
    name: 'Spaces',
    icon: Globe,
  },
  {
    name: 'People',
    icon: User,
  },
  {
    name: 'Social Corner',
    icon: MessageCircle,
  },
  {
    name: 'Handbook',
    icon: Book,
  },
];

const QuickLinks = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="font-medium ">Quick Links</h1>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
          {data.map(({ name, icon: Icon }, i) => (
            <a
              key={i}
              href="#"
              className="quick-link-item bg-card border border-card font-semibold h-20 flex flex-col items-center justify-center text-xs gap-3 rounded-xl cursor-pointer"
            >
              <Icon />
              <p className="text-center">{name}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default QuickLinks;
