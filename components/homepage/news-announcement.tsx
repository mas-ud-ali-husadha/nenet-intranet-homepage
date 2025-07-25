'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface NewsItem {
  id: number;
  image: string;
  title: string;
  description: string;
  url?: string;
}

interface NewsCarouselProps {
  items?: NewsItem[];
  autoPlayInterval?: number;
  className?: string;
}

const NewsAnnouncement = ({
  items,
  autoPlayInterval = 4000,
  className = '',
}: NewsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const newsItems: NewsItem[] = items || [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=500&fit=crop&auto=format',
      title: 'New Employee Wellness Program Launches',
      description:
        'HR announces comprehensive health and wellness benefits including gym memberships, mental health support, and flexible work arrangements starting next month.',
      url: '/news/wellness-program-launch',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=700&h=500&fit=crop&auto=format',
      title: 'Q3 Company Performance Exceeds Targets',
      description:
        'Finance team reports 15% revenue growth and successful expansion into new markets. All-hands meeting scheduled for Friday to celebrate achievements.',
      url: '/news/q3-performance-results',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=700&h=500&fit=crop&auto=format',
      title: 'Annual Innovation Hackathon Registration Open',
      description:
        'Join our 48-hour hackathon event next month. Cross-departmental teams welcome. Prizes include paid time off and project funding opportunities.',
      url: '/news/innovation-hackathon-2024',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700&h=500&fit=crop&auto=format',
      title: 'IT Infrastructure Upgrade This Weekend',
      description:
        'Planned maintenance window Saturday 6PM-Sunday 10AM. Expect brief service interruptions. VPN access will remain available for remote work.',
      url: '/news/infrastructure-upgrade-notice',
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=700&h=500&fit=crop&auto=format',
      title: 'New Office Sustainability Initiative',
      description:
        'Facilities management introduces recycling program expansion, energy-efficient lighting upgrades, and partnership with local organic food vendors.',
      url: '/news/sustainability-initiative',
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&h=500&fit=crop&auto=format',
      title: 'Employee Spotlight: Sarah Chen - Rising Star',
      description:
        'Meet Sarah from Marketing who led the successful product launch campaign. Learn about her journey and upcoming leadership development program.',
      url: '/news/employee-spotlight-sarah-chen',
    },
    {
      id: 7,
      image:
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=700&h=500&fit=crop&auto=format',
      title: 'Cafeteria Menu Updates & Dietary Options',
      description:
        'New seasonal menu featuring locally sourced ingredients. Enhanced vegetarian, vegan, and gluten-free options now available daily.',
      url: '/news/cafeteria-menu-updates',
    },
    {
      id: 8,
      image:
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop&auto=format',
      title: 'Security Training Mandatory for All Staff',
      description:
        'Complete the updated cybersecurity awareness training by month-end. New modules cover phishing detection, password management, and data protection.',
      url: '/news/mandatory-security-training',
    },
  ];

  const nextSlide = useCallback((): void => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1
    );
  }, [newsItems.length]);

  const prevSlide = useCallback((): void => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1
    );
  }, [newsItems.length]);

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [nextSlide, currentIndex, autoPlayInterval]);

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative w-full h-64  overflow-hidden rounded-xl shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {newsItems.map((item: NewsItem, index: number) => (
            <div
              key={item.id}
              className="relative w-full group  h-full duration-300 group-hover:scale-105 flex-shrink-0"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div
                  className={cn(
                    'absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all',
                    hoveredIndex === index && currentIndex === index
                      ? 'translate-y-0'
                      : 'translate-y-10'
                  )}
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-2 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base opacity-90 line-clamp-2">
                    {item.description}
                  </p>
                  <div
                    className={`transform transition-all duration-300  ease-in-out ${
                      hoveredIndex === index && currentIndex === index
                        ? 'opacity-100 mt-5'
                        : 'opacity-0'
                    }`}
                  >
                    <Link href="#">
                      <Button
                        variant={2}
                        className="font-semibold px-6 py-2 rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
                      >
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <Button
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 border-white/30 text-white"
          onClick={prevSlide}
          aria-label="Previous news"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 border-white/30 text-white"
          onClick={nextSlide}
          aria-label="Next news"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Dot indicators */}
      <div className="flex absolute top-5 right-5 justify-center space-x-2">
        {newsItems.map((_, index: number) => (
          <button
            aria-label={`dot-slide-${index}`}
            key={index}
            onClick={() => goToSlide(index)}
            className="group flex items-center justify-center w-4 h-4" // ensures 32x32 button size
          >
            <div
              className={`h-3 w-3 rounded-full transition-colors duration-200 ${
                index === currentIndex
                  ? 'bg-gray-200'
                  : 'border-2 border-white bg-transparent group-hover:bg-gray-200 opacity-50'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default NewsAnnouncement;
