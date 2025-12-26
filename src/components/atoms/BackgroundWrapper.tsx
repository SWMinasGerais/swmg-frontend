import React from 'react';

interface BackgroundWrapperProps {
  children: React.ReactNode;
  variant?: 'white' | 'light' | 'dark' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({
  children,
  variant = 'white',
  padding = 'md',
  className = ''
}) => {
  const variantClass = {
    white: 'bg-white/80 backdrop-blur-sm border border-slate-100/50',
    light: 'bg-slate-50/80 backdrop-blur-sm border border-slate-100/50',
    dark: 'bg-slate-900/90 backdrop-blur-sm text-white border border-slate-800/50',
    gradient: 'bg-gradient-to-br from-red-50 to-slate-50 border border-slate-100/50'
  };

  const paddingClass = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  return (
    <div className={`${variantClass[variant]} ${paddingClass[padding]} rounded-xl ${className}`}>
      {children}
    </div>
  );
};

export default BackgroundWrapper; 