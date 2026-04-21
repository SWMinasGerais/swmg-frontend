import React, { useState } from 'react';
import AccordionFaqItem from '@/features/faq/components/AccordionFaqItem';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  categoryConfig?: Record<string, { label: string; color?: string }>;
  className?: string;
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({
  items,
  categoryConfig = {},
  className
}) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className={`space-y-4 ${className || ''}`}>
      {items.map(item => (
        <AccordionFaqItem
          key={item.id}
          id={item.id}
          question={item.question}
          answer={item.answer}
          category={categoryConfig[item.category]?.label || item.category}
          categoryColor={categoryConfig[item.category]?.color}
          isOpen={openItems.includes(item.id)}
          onToggle={toggleItem}
        />
      ))}
    </div>
  );
};

export default FaqAccordion; 