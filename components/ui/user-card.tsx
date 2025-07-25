import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { DiscordIcon, LinkedInIcon, WhatsappIcon } from '@/icons/social';
import { cn } from '@/lib/utils';
import { UserInterface } from '@/types/user';


const UserCard = ({
  user,
  custom_desc,
  border,
}: {
  user: UserInterface;
  custom_desc?: string;
  border?: boolean;
}) => {
  return (
    <div
      className={cn(
        'flex bg-card  gap-5  justify-between items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors',
        border ? 'border-2 border-card-border' : ''
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="w-10 h-10">
          <AvatarImage src={user.avatar} alt={`@${user.name}`} />
          <AvatarFallback>{user.fallback}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <div className="font-semibold text-sm">{user.name}</div>
          <div className="flex gap-2 items-center text-xs text-gray-500">
            {custom_desc ? custom_desc : `Birthday on ` + user.birthday}
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <a
          href={user.social.whatsapp}
          className="hover:scale-110 transition-transform"
        >
          <WhatsappIcon />
        </a>
        <a
          href={user.social.linkedin}
          className="hover:scale-110 transition-transform"
        >
          <LinkedInIcon />
        </a>
        <a
          href={user.social.discord}
          className="hover:scale-110 transition-transform"
        >
          <DiscordIcon />
        </a>
      </div>
    </div>
  );
};

export default UserCard;
