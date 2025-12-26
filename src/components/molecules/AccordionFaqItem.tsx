import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface AccordionFaqItemProps {
  id: string;
  question: string;
  answer: string;
  category?: string;
  categoryColor?: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

const AccordionFaqItem: React.FC<AccordionFaqItemProps> = ({
  id,
  question,
  answer,
  category,
  categoryColor = "bg-red-600/10 text-red-700",
  isOpen,
  onToggle
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden border border-slate-100/50 hover:bg-white/90 transition-all duration-300">
      <button
        className="w-full text-left px-6 py-5 flex items-center justify-between"
        onClick={() => onToggle(id)}
        aria-expanded={isOpen}
      >
        <h3 className="font-semibold text-slate-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-red-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
        )}
      </button>
      
      {isOpen && (
        <div className="px-6 pb-5">
          {category && (
            <div className="pt-1 pb-2">
              <span className={`inline-block px-2 py-1 text-xs rounded-full ${categoryColor} font-medium`}>
                {category}
              </span>
            </div>
          )}
          <p className="text-slate-700 whitespace-pre-line">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default AccordionFaqItem; 