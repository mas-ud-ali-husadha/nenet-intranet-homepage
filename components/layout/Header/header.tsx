import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import DarkModeToggle from '@/components/homepage/HeaderTools/dark-mode-toggle';
import LaunchPad from '@/components/homepage/HeaderTools/launch-pad';
import Search from '@/components/homepage/Search/search';
import UsersList from '@/components/homepage/HeaderTools/users-list';
import NotificationsList from '@/components/homepage/HeaderTools/notification';

const Header = () => {
  return (
    <header className="flex z-30 absolute top-7 px-4 md:px-9 justify-between w-full items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      {/* Left side: Sidebar trigger & Search */}
      <div className="flex items-center gap-2 w-full max-w-[60%] sm:max-w-[70%]">
        <SidebarTrigger />
        <div className="hidden sm:block w-full">
          <Search />
        </div>
      </div>

      {/* Right side: Tools */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Notifications */}
        <NotificationsList />

        {/* Launchpad */}
        <LaunchPad />

        {/* Dark mode toggle */}
        <DarkModeToggle />

        {/* Users list */}
        <UsersList />
      </div>
    </header>
  );
};

export default Header;
