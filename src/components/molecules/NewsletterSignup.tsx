import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface NewsletterSignupProps {
  title?: string;
  description?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ 
  title = "Fique por dentro do ecossistema", 
  description = "Assine nossa newsletter para receber novidades, conteúdos exclusivos e datas de eventos em primeira mão."
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubscribed(true);
      setEmail('');
    }, 1000);
  };

  return (
    <div className="p-8 bg-white/90 backdrop-blur-sm rounded-xl border border-slate-100/50 shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
          <p className="text-slate-600">{description}</p>
        </div>

        {subscribed ? (
          <div className="bg-green-50 p-4 rounded-lg text-green-800 w-full md:w-auto flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <p>Obrigado! Você foi inscrito com sucesso.</p>
          </div>
        ) : (
          <form 
            className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
            onSubmit={handleSubmit}
          >
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="flex-grow px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Inscrevendo
                </div>
              ) : (
                <div className="flex items-center">
                  Inscrever-se
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup; 