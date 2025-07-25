'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useSidebar } from '@/components/ui/sidebar';
import { Star } from 'lucide-react';

export function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const { state } = useSidebar();

  const initials = user.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <>
      <div className="grid flex-1 mt-5 text-center text-3xl leading-tight">
        <span className="truncate font-bold">
          {state == 'collapsed' ? 'N.' : 'Nenet.'}
        </span>
      </div>
      <div className="flex flex-col gap-5 mt-4">
        <Avatar
          className={`rounded-full mx-auto outline-4 outline-white transition-all duration-300 ${
            state == 'collapsed' ? 'h-8 w-8 outline-none' : 'h-16 w-16'
          }`}
        >
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div
          className={`grid flex-1 text-center text-sm leading-tight ${
            state == 'collapsed' ? 'hidden' : 'block'
          }`}
        >
          <span className="truncate font-bold">{user.name}</span>
          <span className="gap-2 rounded-full py-1 px-2 flex justify-center items-center mx-auto w-fit bg-card font-semibold text-xs mt-2">
            <Star size={10} />
            80.5
          </span>
        </div>
      </div>
    </>
  );
}
