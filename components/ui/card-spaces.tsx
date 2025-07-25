import Link from 'next/link';
import React from 'react';

const CardSpaces = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <Link href="#" className="cursor-pointer bg-card px-5 py-4 w-full rounded-xl shadow-md border-l-4 border-card-border hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start gap-4">
        <div className="w-15 h-15  flex justify-center items-center rounded-xl overflow-hidden flex-shrink-0 bg-sidebar">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold mb-1">{title}</h3>
          <p className="text-xs text-desc mb-2 line-clamp-2 leading-tight">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardSpaces;
