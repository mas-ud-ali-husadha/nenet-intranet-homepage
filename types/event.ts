export interface EventInterface {
  id: number;
  image: string;
  title: string;
  date: string;
  time: string;
  invited: string;
  description: string;
}

export interface EventCardProps {
  event: EventInterface;
}
