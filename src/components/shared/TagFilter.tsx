import React from 'react';
import { Button } from '@/components/ui/button';

interface TagFilterProps {
  tags: string[];
  activeTag: string | null;
  onTagChange: (tag: string | null) => void;
  color?: 'red' | 'blue' | 'green' | 'purple';
  allLabel?: string;
}

const TagFilter: React.FC<TagFilterProps> = ({
  tags,
  activeTag,
  onTagChange,
  color = 'red',
  allLabel = 'Todas'
}) => {
  const activeColorClass = {
    red: 'bg-red-600 hover:bg-red-700 text-white',
    blue: 'bg-blue-600 hover:bg-blue-700 text-white',
    green: 'bg-green-600 hover:bg-green-700 text-white',
    purple: 'bg-purple-600 hover:bg-purple-700 text-white'
  };

  return (
    <div className="overflow-x-auto pb-2 mb-8">
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <Button 
          variant={activeTag === null ? "default" : "outline"} 
          size="sm"
          onClick={() => onTagChange(null)}
          className={activeTag === null ? activeColorClass[color] : "border-slate-200 text-slate-700"}
        >
          {allLabel}
        </Button>
        {tags.map(tag => (
          <Button 
            key={tag} 
            variant={activeTag === tag ? "default" : "outline"} 
            size="sm"
            onClick={() => onTagChange(tag)}
            className={activeTag === tag ? activeColorClass[color] : "border-slate-200 text-slate-700"}
          >
            {tag}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TagFilter; 