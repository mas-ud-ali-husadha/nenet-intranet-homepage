import { LucideIcon } from "lucide-react";

export interface LaunchPadType {
  href: string;
  imageURL: string;
  label: string;
}


export type DataItem = {
  id: number;
  title: string;
  type: 'settings' | 'page' | 'calendar' | 'email' | 'users' | string;
  icon: LucideIcon;
};
