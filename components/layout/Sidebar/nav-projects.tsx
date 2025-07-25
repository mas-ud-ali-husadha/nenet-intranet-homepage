'use client';

import { type LucideIcon } from 'lucide-react';

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

export function MainMenu({
  projects,
}: {
  projects: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {
  return (
    <SidebarGroup className=" mt-5">
      <SidebarGroupLabel>Main menu</SidebarGroupLabel>
      <SidebarMenu className="mt-4">
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild tooltip={item.name}>
              <a href={item.url} className="flex gap-5">
                <item.icon />
                <span
                  className={`text-sm ${
                    item.name == 'Dashboard' ? 'font-bold' : 'font-medium text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {item.name}
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
