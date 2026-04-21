import React from 'react';

interface TagBadgeProps {
  label: string;
  color?: 'red' | 'blue' | 'green' | 'purple' | 'gray' | 'neutral';
  onClick?: () => void;
  isActive?: boolean;
}

const TagBadge: React.FC<TagBadgeProps> = ({
  label,
  color = 'neutral',
  onClick,
  isActive = false
}) => {
  const colorClasses = {
    red: isActive
      ? "bg-red-600 text-white hover:bg-red-700"
      : "bg-red-50 text-red-700 hover:bg-red-100",
    blue: isActive
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-blue-50 text-blue-700 hover:bg-blue-100",
    green: isActive
      ? "bg-green-600 text-white hover:bg-green-700"
      : "bg-green-50 text-green-700 hover:bg-green-100",
    purple: isActive
      ? "bg-purple-600 text-white hover:bg-purple-700"
      : "bg-purple-50 text-purple-700 hover:bg-purple-100",
    gray: isActive
      ? "bg-slate-600 text-white hover:bg-slate-700"
      : "bg-slate-100 text-slate-700 hover:bg-slate-200",
    neutral: isActive
      ? "bg-neutral-600 text-white hover:bg-neutral-700"
      : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
  };

  return (
    <span
      className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${colorClasses[color]} transition-colors ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {label}
    </span>
  );
};

export default TagBadge; 