import React from 'react';
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, RotateCcw } from "lucide-react";
import { Mentor } from "@/modules/mentors/types";
import MentorCard from "@/features/mentors/components/MentorCard";

interface MentorsGridProps {
  mentors?: Mentor[];
  isLoading?: boolean;
  isError?: boolean;
  onResetFilters: () => void;
  onRetry?: () => void;
}

const MentorsGrid = ({ 
  mentors = [], 
  isLoading = false, 
  isError = false, 
  onResetFilters, 
  onRetry = () => window.location.reload()
}: MentorsGridProps) => {
  
  // Render skeleton loading cards
  const renderSkeletonCard = (index: number) => (
    <div 
      key={index} 
      className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100"
    >
      <div className="flex flex-col h-full">
        <div className="pt-8 pb-4 px-4 flex flex-col items-center">
          <Skeleton className="h-24 w-24 rounded-full mb-3" />
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2 mb-1" />
          <Skeleton className="h-4 w-1/3" />
        </div>
        
        <div className="px-4 pb-3 flex gap-1 justify-center">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-16" />
        </div>
        
        <div className="mt-auto pt-4 pb-4 px-4 border-t border-slate-100 bg-slate-50 flex justify-center gap-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>
    </div>
  );

  // Error state
  if (isError) {
    return (
      <div className="text-center py-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-red-100/50">
        <div className="text-red-600 mb-4">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-12 w-12 mx-auto" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Erro ao carregar mentores
        </h3>
        <p className="text-slate-600 mb-6">
          Não foi possível carregar a lista de mentores. Por favor, tente novamente mais tarde.
        </p>
        <Button 
          className="bg-red-600 hover:bg-red-700 text-white"
          onClick={onRetry}
        >
          Tentar novamente
        </Button>
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => renderSkeletonCard(index))}
      </div>
    );
  }

  // Empty state
  if (mentors.length === 0) {
    return (
      <div className="text-center py-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-slate-100/50">
        <div className="mx-auto w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
          <Search className="h-8 w-8 text-red-400" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Nenhum mentor encontrado
        </h3>
        <p className="text-slate-600 mb-6 max-w-md mx-auto">
          Não encontramos mentores com os filtros selecionados. Tente ajustar seus critérios de busca.
        </p>
        <Button
          className="bg-red-600 hover:bg-red-700 text-white"
          onClick={onResetFilters}
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Limpar filtros
        </Button>
      </div>
    );
  }

  // Mentors grid
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {mentors.map(mentor => (
        <MentorCard key={mentor.id} mentor={mentor} />
      ))}
    </div>
  );
};

export default MentorsGrid; 