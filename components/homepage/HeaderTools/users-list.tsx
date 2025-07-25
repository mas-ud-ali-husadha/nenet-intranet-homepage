'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React, { useState } from 'react';
import UserCard from '@/components/ui/user-card';

const mockUsers = [
  {
    id: 1,
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    name: 'Alex Johnson',
    username: 'alexjohnson',
    role: 'Senior Engineer',
    birthday: '10/11',
    fallback: 'AJ',
    social: {
      whatsapp: '#',
      linkedin: '#',
      discord: '#',
    },
  },
  {
    id: 2,
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    name: 'Emma Wilson',
    fallback: 'EW',
    role: 'Product Manager',
    username: 'emmawilson',
    birthday: '11/12',
    social: {
      whatsapp: '#',
      linkedin: '#',
      discord: '#',
    },
  },
  {
    id: 3,
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    name: 'Michael Torres',
    username: 'michaeltorres',
    birthday: '10/01',
    fallback: 'MT',
    social: {
      whatsapp: '#',
      linkedin: '#',
      discord: '#',
    },
  },
  {
    id: 4,
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    name: 'Carlos Martinez',
    username: 'carlosmartinez',
    fallback: 'CM',
    birthday: '20/02',
    social: {
      whatsapp: '#',
      linkedin: '#',
      discord: '#',
    },
  },
  {
    id: 5,
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    name: 'David Kim',
    username: 'davidkim',
    fallback: 'DK',
    birthday: '30/04',
    social: {
      whatsapp: '#',
      linkedin: '#',
      discord: '#',
    },
  },
  {
    id: 6,
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    name: 'Lisa Rodriguez',
    username: 'lisarodriguez',
    fallback: 'LR',
    birthday: '30/04',
    social: {
      whatsapp: '#',
      linkedin: '#',
      discord: '#',
    },
  },
  {
    id: 7,
    avatar:
      'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
    name: 'Ryan Mitchell',
    username: 'Ryan Mithchell',
    fallback: 'RM',
    birthday: '21/05',
    social: {
      whatsapp: '#',
      linkedin: '#',
      discord: '#',
    },
  },
  {
    id: 8,
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    name: 'Jessica Park',
    username: 'jessicapark',
    fallback: 'JP',
    birthday: '11/06',
    social: {
      whatsapp: '#',
      linkedin: '#',
      discord: '#',
    },
  },
];

const AvatarList = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      {...props}
      className="flex items-center text-xs text-nowrap gap-2 hover:bg-btn-2 transition-colors pr-2 rounded-full cursor-pointer"
    >
      <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 ">
        {/* Avatars */}
        <Avatar className="z-30">
          <AvatarImage src={mockUsers[0].avatar} alt="@alexjohnson" />
          <AvatarFallback>AJ</AvatarFallback>
        </Avatar>
        <Avatar className="z-20">
          <AvatarImage src={mockUsers[1].avatar} alt="@emmawilson" />
          <AvatarFallback>EW</AvatarFallback>
        </Avatar>
        <Avatar className="z-10">
          <AvatarImage src={mockUsers[2].avatar} alt="@michaeltorres" />
          <AvatarFallback>MT</AvatarFallback>
        </Avatar>
      </div>
      <span className="hidden md:block">{mockUsers.length} members</span>
    </button>
  );
});

const UsersList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = mockUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <AvatarList />
      </PopoverTrigger>
      <PopoverContent className="bg-card w-screen md:w-96 md:mr-5 p-0">
        <div className="flex flex-col gap-0">
          {/* Search Bar */}
          <div className="p-4 ">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 text-sm "
              />
            </div>
          </div>

          {/* Header */}
          <div className="px-4 py-2  border-b border-btn-2">
            <h3 className="font-semibold text-sm">
              All Members ({filteredUsers.length})
            </h3>
          </div>

          {/* User List */}
          <div className="max-h-80 overflow-y-auto">
            {filteredUsers.length > 0 ? (
              <div className="p-2">
                {filteredUsers.map((user) => (
                  <UserCard key={user.id} user={user} />
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500 text-sm">
                No members found matching &quot;{searchTerm}&quot;
              </div>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
AvatarList.displayName = 'AvatarList';
export default UsersList;
