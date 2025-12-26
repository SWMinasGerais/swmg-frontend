import { ReactNode } from "react";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  count: string;
  icon: ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  count,
  icon
}) => {
  return (
    <div className="flex items-start mb-12 group">
      <div className="flex-shrink-0">
        <div className="relative">
          <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-lg transform transition-transform group-hover:scale-110">
            {icon}
          </div>
          <div className="absolute -top-2 -right-2 bg-white rounded-full px-2 py-1 text-xs font-bold shadow text-red-600 border border-red-100">
            {year}
          </div>
        </div>
      </div>
      <div className="ml-6 relative">
        <div className="w-1 h-full absolute left-0 top-0 transform -translate-x-10 bg-red-200/30"></div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {title}
        </h3>
        <p className="text-slate-600 mb-3 max-w-2xl">
          {description}
        </p>
        <div className="text-sm font-medium text-red-600 flex items-center">
          <span className="mr-2">♦</span> {count}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem; 