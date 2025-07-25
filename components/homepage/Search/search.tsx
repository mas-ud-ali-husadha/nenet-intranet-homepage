'use client';

import React, { useState, useEffect, KeyboardEvent, ChangeEvent } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverAnchor, // Changed: Import PopoverAnchor instead of PopoverTrigger
} from '@/components/ui/popover';
import {
  Search as SearchIcon,
  User,
  Settings,
  FileText,
  Calendar,
  Mail,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { DataItem } from '@/types/header';

const mockData: DataItem[] = [
  { id: 1, title: 'User Profile Settings', type: 'settings', icon: User },
  { id: 2, title: 'Dashboard Overview', type: 'page', icon: FileText },
  { id: 3, title: 'Calendar Events', type: 'calendar', icon: Calendar },
  { id: 4, title: 'Email Templates', type: 'email', icon: Mail },
  { id: 5, title: 'Account Settings', type: 'settings', icon: Settings },
  { id: 6, title: 'User Management', type: 'users', icon: User },
  { id: 7, title: 'Meeting Schedule', type: 'calendar', icon: Calendar },
  { id: 8, title: 'Document Library', type: 'page', icon: FileText },
  { id: 9, title: 'Notification Settings', type: 'settings', icon: Settings },
  { id: 10, title: 'Contact List', type: 'email', icon: Mail },
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filteredResults, setFilteredResults] = useState<DataItem[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = mockData.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredResults(filtered);
      setHighlightedIndex(-1);
    } else {
      setFilteredResults([]);
      setHighlightedIndex(-1);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm.trim() && filteredResults.length > 0) {
      setIsOpen(true);
    } else if (!searchTerm.trim()) {
      setIsOpen(false);
    }
  }, [searchTerm, filteredResults]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || filteredResults.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filteredResults.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredResults.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0) {
          handleResultClick(filteredResults[highlightedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
    }
  };

  const handleResultClick = (result: DataItem) => {
    console.log('Selected:', result);
    setSearchTerm(result.title);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleFocus = () => {
    if (searchTerm.trim() && filteredResults.length > 0) {
      setIsOpen(true);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (!e.target.value.trim()) {
      setIsOpen(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open && document.activeElement?.tagName === 'INPUT') {
      return;
    }
  };

  const getTypeColor = (type: string): string => {
    const colors: Record<string, string> = {
      settings: 'text-blue-600',
      page: 'text-green-600',
      calendar: 'text-purple-600',
      email: 'text-orange-600',
      users: 'text-red-600',
    };
    return colors[type] || 'text-gray-600';
  };

  return (
    <div className="relative w-full max-w-sm">
      <Popover open={isOpen} onOpenChange={handleOpenChange}>
        {/* Changed: Replaced PopoverTrigger with PopoverAnchor */}
        <PopoverAnchor asChild>
          {/* Changed: Removed role='button' from the div */}
          <div className="border-l-2 border-slate-500 pl-2 flex gap-2 relative">
            <SearchIcon size={20} className="text-foreground mt-0.5" />
            <input
              className="text-sm w-full outline-0 text-foreground bg-transparent"
              placeholder="Search something...."
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={handleFocus}
              autoComplete="off"
            />
          </div>
        </PopoverAnchor>

        <PopoverContent
          className={cn(
            'w-[var(--radix-popover-trigger-width)] bg-card p-0 overflow-hidden',
            searchTerm ? 'border-4' : 'border-none'
          )}
          align="start"
          side="bottom"
          onOpenAutoFocus={(e) => e.preventDefault()}
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          {/* Results */}
          {filteredResults.length > 0 ? (
            <>
              <div className="py-1 max-h-72 overflow-y-auto">
                {filteredResults.map((result, index) => {
                  const IconComponent = result.icon;
                  return (
                    <button
                      key={result.id}
                      className={`w-full px-3 py-2 text-left flex items-center gap-3 hover:bg-btn-2 transition-colors ${
                        index === highlightedIndex
                          ? 'bg-btn-2 border-l-2 border-slate-900'
                          : ''
                      }`}
                      onClick={() => handleResultClick(result)}
                      onMouseEnter={() => setHighlightedIndex(index)}
                    >
                      <IconComponent
                        size={16}
                        className="text-foreground flex-shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium truncate">
                          {result.title}
                        </div>
                        <div
                          className={`text-xs capitalize ${getTypeColor(
                            result.type
                          )}`}
                        >
                          {result.type}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="border-t border-btn-2 px-3 py-2">
                <div className="text-xs text-gray-500 flex items-center justify-between">
                  <span>
                    {filteredResults.length} result
                    {filteredResults.length !== 1 ? 's' : ''}
                  </span>
                  <span>Press ↵ to select</span>
                </div>
              </div>
            </>
          ) : (
            /* No Results */
            searchTerm.trim() && (
              <div className="px-3 py-4 text-center">
                <SearchIcon size={24} className="mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">No results found</p>
                <p className="text-xs text-gray-400 mt-1">
                  Try searching for something else
                </p>
              </div>
            )
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Search;