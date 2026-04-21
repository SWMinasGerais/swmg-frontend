import React from 'react';
import { StatusType } from '@/components/shared/StatusBadge';
import StatusBadge from '@/components/shared/StatusBadge';

interface CardHeaderProps {
  title: string;
  subtitle?: string;
  status?: {
    type: StatusType;
    label?: string;
  };
  icon?: React.ReactNode;
  rightContent?: React.ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  status,
  icon,
  rightContent
}) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-start mb-2">
        {icon && (
          <div className="h-14 w-14 bg-slate-50 rounded-lg flex items-center justify-center overflow-hidden border border-slate-100 mr-3">
            {icon}
          </div>
        )}
        <div className="flex-grow">
          <h3 className="font-bold text-xl mb-1 text-[#111]">{title}</h3>
          {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
        </div>
        {status && (
          <div className="ml-2">
            <StatusBadge status={status.type} label={status.label} />
          </div>
        )}
        {rightContent && !status && (
          <div className="ml-2">
            {rightContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardHeader; 