'use client';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { LaunchPadType } from '@/types/header';
import { Grip } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const LaunchPadData: LaunchPadType[] = [
  {
    href: 'https://www.dropbox.com/',
    imageURL: '/launch-pad/dropbox.png',
    label: 'Dropbox',
  },
  {
    href: 'https://www.box.com/home',
    imageURL: '/launch-pad/box.png',
    label: 'Box',
  },
  {
    href: 'https://onedrive.live.com',
    imageURL: '/launch-pad/one-drive.png',
    label: 'One Drive',
  },
  {
    href: 'https://drive.google.com/',
    imageURL: '/launch-pad/google-drive.png',
    label: 'Drive',
  },
  {
    href: 'http://teams.microsoft.com/',
    imageURL: '/launch-pad/team.png',
    label: 'Team',
  },
  {
    href: 'https://zoom.us/',
    imageURL: '/launch-pad/zoom.png',
    label: 'Zoom',
  },
  {
    href: 'https://word.cloud.microsoft/',
    imageURL: '/launch-pad/word.png',
    label: 'Word',
  },
  {
    href: 'https://excel.cloud.microsoft/',
    imageURL: '/launch-pad/excel.png',
    label: 'Excel',
  },
  {
    href: 'https://powerpoint.cloud.microsoft/',
    imageURL: '/launch-pad/powerpoint.png',
    label: 'Power Point',
  },
];

const LaunchPadList = ({
  imageURL,
  label,
  href,
}: {
  imageURL: string;
  label: string;
  href: string;
}) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="flex cursor-pointer text-center flex-col gap-2 mx-auto text-xs hover:bg-btn-2 px-5 py-2 rounded-xl"
    >
      <Image width={50} height={50} src={imageURL} alt={label} />
      <p>{label}</p>
    </a>
  );
};

const LaunchPad = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="icon"
          aria-label="Launch pad"
          variant={3}
          tooltip="Launch pad"
        >
          <Grip size={20} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="bg-card md:w-96">
        <div className="grid grid-cols-3 gap-3 w-full">
          {LaunchPadData.map((item, i) => (
            <LaunchPadList {...item} key={i} />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LaunchPad;
