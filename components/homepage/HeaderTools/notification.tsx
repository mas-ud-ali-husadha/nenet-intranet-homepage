'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Bell,
  Search,
  MessageCircle,
  UserPlus,
  Calendar,
  Settings,
  CheckCircle,
  ClipboardList,
} from 'lucide-react';
import React, { useState } from 'react';

const mockNotifications = [
  {
    id: 1,
    type: 'announcement',
    title: 'Company Townhall Scheduled',
    description:
      'Join the all-hands meeting on Friday at 10 AM in the main hall.',
    time: '5 min ago',
    read: false,
    avatar: null,
    fallback: 'HR',
    icon: Calendar,
  },
  {
    id: 2,
    type: 'message',
    title: 'Direct message from John Smith',
    description: 'Please review the new marketing plan before EOD.',
    time: '12 min ago',
    read: false,
    avatar: 'https://github.com/johnsmith.png',
    fallback: 'JS',
    icon: MessageCircle,
  },
  {
    id: 3,
    type: 'task',
    title: 'Quarterly Report Submission',
    description: 'Finance department requests Q2 reports by next Monday.',
    time: '1 hour ago',
    read: true,
    avatar: null,
    fallback: 'FD',
    icon: ClipboardList,
  },
  {
    id: 4,
    type: 'hr',
    title: 'New Company Policy Update',
    description: 'Review the updated remote work guidelines in the HR portal.',
    time: '2 hours ago',
    read: false,
    avatar: null,
    fallback: 'HR',
    icon: Settings,
  },
  {
    id: 5,
    type: 'event',
    title: 'Team Building Activity',
    description: 'Outdoor team building scheduled this Saturday at Green Park.',
    time: '3 hours ago',
    read: true,
    avatar: null,
    fallback: 'EV',
    icon: Calendar,
  },
  {
    id: 6,
    type: 'onboarding',
    title: 'New Joiner: Amanda Lee',
    description: 'Welcome Amanda to the Design team!',
    time: '1 day ago',
    read: true,
    avatar: 'https://github.com/amandalee.png',
    fallback: 'AL',
    icon: UserPlus,
  },
  {
    id: 7,
    type: 'system',
    title: 'System Maintenance Notification',
    description:
      'Intranet portal will be down for maintenance tonight from 10 PM to 12 AM.',
    time: '1 day ago',
    read: true,
    avatar: null,
    fallback: 'IT',
    icon: Settings,
  },
  {
    id: 8,
    type: 'recognition',
    title: 'Kudos to Daniel Kim!',
    description: 'Recognized for outstanding client service in Q2.',
    time: '2 days ago',
    read: false,
    avatar: 'https://github.com/danielkim.png',
    fallback: 'DK',
    icon: CheckCircle,
  },
];

const NotificationBell = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const unreadCount = mockNotifications.filter((n) => !n.read).length;

  return (
    <Button
      variant={3}
      tooltip="Notification"
      ref={ref}
      aria-label="Notifications" 
      {...props}
      className="relative p-2 rounded-full transition-colors cursor-pointer"
    >
      <Bell className="w-5 h-5" />
      {unreadCount > 0 && (
        <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full animate-pulse">
          <div className="absolute inset-0 w-3 h-3 bg-red-500 rounded-full animate-ping opacity-75" />
        </div>
      )}
    </Button>
  );
});

NotificationBell.displayName = 'NotificationBell';

const NotificationItem = ({
  notification,
}: {
  notification: (typeof mockNotifications)[0];
  onMarkAsRead: (id: number) => void;
  onDelete: (id: number) => void;
}) => {
  const IconComponent = notification.icon;

  return (
    <div
      className={`flex items-start gap-3 p-3  transition-colors ${
        !notification.read
          ? 'bg-slate-50 dark:bg-slate-950/20 border-l-2 border-l-slate-800'
          : ''
      }`}
    >
      <div className="flex-shrink-0 relative">
        {notification.avatar ? (
          <Avatar className="w-8 h-8">
            <AvatarImage src={notification.avatar} alt="User" />
            <AvatarFallback className="text-xs">
              {notification.fallback}
            </AvatarFallback>
          </Avatar>
        ) : (
          <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <IconComponent className="w-4 h-4" />
          </div>
        )}
        {!notification.read && (
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <p className={`text-sm font-medium `}>{notification.title}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
              {notification.description}
            </p>
            <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const NotificationsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [notifications, setNotifications] = useState(mockNotifications);

  const filteredNotifications = notifications.filter(
    (notification) =>
      notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notification.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleMarkAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const handleDelete = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const handleMarkAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <NotificationBell />
      </PopoverTrigger>
      <PopoverContent className="md:w-96 p-0 bg-card">
        <div className="flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 ">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-base">Notifications</h3>
              {unreadCount > 0 && (
                <Badge variant="secondary" className="text-xs">
                  {unreadCount} new
                </Badge>
              )}
            </div>
            <div className="flex gap-2">
              {unreadCount > 0 && (
                <Button
                  size="sm"
                  onClick={handleMarkAllAsRead}
                  className="text-xs h-7"
                >
                  Mark all read
                </Button>
              )}
              <Button
                size="sm"
                onClick={handleClearAll}
                className="text-xs h-7"
              >
                Clear all
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="p-3 border-b border-btn-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search notifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 text-sm h-8"
              />
            </div>
          </div>

          {/* Notifications List */}
          <div className="max-h-96 overflow-y-auto">
            {filteredNotifications.length > 0 ? (
              <div className="py-2">
                {filteredNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                    onMarkAsRead={handleMarkAsRead}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            ) : notifications.length === 0 ? (
              <div className="p-8 text-center">
                <Bell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-sm font-medium">
                  No notifications yet
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  When you get notifications, they&apos;ll show up here
                </p>
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500 text-sm">
                No notifications found matching &apos;{searchTerm}&apos;
              </div>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationsList;
