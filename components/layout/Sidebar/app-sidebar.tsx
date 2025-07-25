'use client';
import * as React from 'react';
import {
  BookCheck,
  Calendar1,
  IdCard,
  LayoutDashboard,
  Newspaper,
  PersonStanding,
} from 'lucide-react';

import { MainMenu } from '@/components/layout/Sidebar/nav-projects';
import { NavUser } from '@/components/layout/Sidebar/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from '@/components/ui/sidebar';

const data = {
  user: {
    name: "Mas'ud Ali",
    email: 'm@example.com',
    avatar: '/profile-4.png',
  },
  team: {
    name: 'Nenet',
  },
  projects: [
    {
      name: 'Dashboard',
      url: '#',
      icon: LayoutDashboard,
    },
    {
      name: 'My Task',
      url: '#',
      icon: BookCheck,
    },
    {
      name: 'News',
      url: '#',
      icon: Newspaper,
    },
    {
      name: 'Events',
      url: '#',
      icon: Calendar1,
    },
    {
      name: 'People',
      url: '#',
      icon: PersonStanding,
    },
    {
      name: 'Content',
      url: '#',
      icon: IdCard,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <MainMenu projects={data.projects} />
      </SidebarContent>
    </Sidebar>
  );
}
