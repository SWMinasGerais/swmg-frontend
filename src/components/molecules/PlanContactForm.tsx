import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SendIcon, CheckIcon, ArrowRightIcon, CalendarIcon } from 'lucide-react';

type PlanContactFormProps = {
  planName: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
};

/**
 * Contact form for a specific plan
 */
const PlanContactForm: React.FC<PlanContactFormProps> = ({ 
  planName,
  className,
  variant = 'primary'
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you'd send this to your API
      console.log(`Contact request for ${planName} from ${email}`);
      setIsSubmitted(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
        setIsExpanded(false);
      }, 3000);
    }
  };
  
  const variantStyles = {
    primary: {
      button: "bg-red-600 hover:bg-red-700 text-white",
      inputBorder: "border-gray-300 focus:border-red-500 focus:ring-red-500",
      mainButton: "bg-red-600 hover:bg-red-700 text-white",
      secondaryButton: "border border-red-200 bg-red-50 hover:bg-red-100 text-red-700"
    },
    secondary: {
      button: "bg-blue-600 hover:bg-blue-700 text-white",
      inputBorder: "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
      mainButton: "bg-blue-600 hover:bg-blue-700 text-white",
      secondaryButton: "border border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-700"
    },
    outline: {
      button: "border border-gray-300 bg-white hover:bg-gray-50 text-gray-700",
      inputBorder: "border-gray-300 focus:border-gray-500 focus:ring-gray-500",
      mainButton: "bg-emerald-600 hover:bg-emerald-700 text-white",
      secondaryButton: "border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-700"
    }
  };
  
  return (
    <div className={className}>
      {isExpanded ? (
        <form 
          onSubmit={handleSubmit} 
          className="mt-2"
        >
          <div className="flex items-center gap-1">
            <Input
              type="email"
              placeholder="Seu email para contato"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={cn("text-xs h-8", variantStyles[variant].inputBorder)}
              disabled={isSubmitted}
              required
            />
            <Button 
              type="submit"
              className={cn(
                "h-8 px-2",
                variantStyles[variant].button,
                isSubmitted && "cursor-default"
              )}
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <CheckIcon className="h-3.5 w-3.5" />
              ) : (
                <SendIcon className="h-3.5 w-3.5" />
              )}
            </Button>
          </div>
          
          {isSubmitted && (
            <p className="text-xs text-green-600 mt-1">
              Obrigado! Entraremos em contato em breve.
            </p>
          )}
          
          <p className="text-xs text-gray-500 mt-1">
            Envie seu email para informações sobre o plano {planName}.
          </p>
        </form>
      ) : (
        <div className="flex flex-col gap-2">
          <Button 
            onClick={() => setIsExpanded(true)}
            className={cn(
              "h-8 w-full text-xs flex gap-1 font-medium justify-center items-center",
              variantStyles[variant].mainButton
            )}
          >
            Mais informações
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Button>
          
          <Button 
            className={cn(
              "h-8 w-full text-xs flex gap-1 font-medium justify-center items-center",
              variantStyles[variant].secondaryButton
            )}
            onClick={() => window.open('https://calendly.com/startupweekendmg/15min', '_blank')}
          >
            <CalendarIcon className="h-3.5 w-3.5" />
            Agendar conversa
          </Button>
        </div>
      )}
    </div>
  );
};

export default PlanContactForm; 