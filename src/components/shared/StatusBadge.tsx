import React from 'react';

export type StatusType = 'operational' | 'acquired' | 'fundraising' | 'accelerated' | 'success' | 'warning' | 'error' | 'info';

interface StatusBadgeProps {
  status: StatusType;
  label?: string;
  size?: 'sm' | 'md';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ 
  status, 
  label, 
  size = 'sm'
}) => {
  const statusConfig = {
    operational: { color: "bg-emerald-50 text-emerald-700", label: "Operacional" },
    acquired: { color: "bg-blue-50 text-blue-700", label: "Adquirida" },
    fundraising: { color: "bg-amber-50 text-amber-700", label: "Captando" },
    accelerated: { color: "bg-amber-50 text-amber-700", label: "Acelerada" },
    success: { color: "bg-emerald-50 text-emerald-700", label: "Sucesso" },
    warning: { color: "bg-amber-50 text-amber-700", label: "Atenção" },
    error: { color: "bg-red-50 text-red-700", label: "Erro" },
    info: { color: "bg-blue-50 text-blue-700", label: "Informação" }
  };
  
  const sizeClass = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm'
  };
  
  const config = statusConfig[status];
  const displayLabel = label || config.label;
  
  return (
    <span className={`${sizeClass[size]} rounded-full font-medium ${config.color}`}>
      {displayLabel}
    </span>
  );
};

export default StatusBadge; 