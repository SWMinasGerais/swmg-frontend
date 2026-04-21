import React from 'react';
import EntityCard from '@/features/ecosystem/components/EntityCard';

export interface Entity {
  id: number;
  name: string;
  city?: string;
  logo?: string;
  type: string;
}

interface EntityListProps {
  entities: Entity[];
  typeConfig: Record<string, { icon: React.ReactNode, color: string }>;
  onEntityHover?: (id: number | null) => void;
  emptyMessage?: React.ReactNode;
  className?: string;
}

const EntityList: React.FC<EntityListProps> = ({
  entities,
  typeConfig,
  onEntityHover,
  emptyMessage,
  className
}) => {
  return (
    <div className={`space-y-4 ${className || ''}`}>
      {entities.length > 0 ? (
        entities.map(entity => (
          <EntityCard
            key={entity.id}
            id={entity.id}
            name={entity.name}
            city={entity.city}
            logo={entity.logo}
            type={entity.type}
            typeIcon={typeConfig[entity.type]?.icon}
            typeClass={typeConfig[entity.type]?.color || ''}
            onMouseEnter={() => onEntityHover?.(entity.id)}
            onMouseLeave={() => onEntityHover?.(null)}
          />
        ))
      ) : (
        <div className="text-center py-8">
          {emptyMessage || <p className="text-gray-500">No entities found</p>}
        </div>
      )}
    </div>
  );
};

export default EntityList; 