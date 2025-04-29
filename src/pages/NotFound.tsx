import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileQuestion, Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-50/50 rounded-full -translate-x-1/2 transform" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-50/30 rounded-full translate-y-1/2 -translate-x-1/3 transform" />
        
        <div className="container max-w-screen-md mx-auto px-4 py-16 relative z-10">
          <div className="text-center">
            {/* Icon */}
            <div className="mx-auto mb-10 w-20 h-20 rounded-full bg-red-50 flex items-center justify-center animate-pulse-slow">
              <FileQuestion size={40} className="text-red-600" />
            </div>
            
            {/* 404 Text */}
            <h1 className="text-7xl md:text-8xl font-bold text-slate-900 mb-4 tracking-tighter">
              404
            </h1>
            
            <div className="w-16 h-1 bg-red-600 mx-auto mb-8"></div>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4">
              Página não encontrada
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto">
              Oops! A página que você está procurando não existe ou foi movida.
            </p>
            
            {/* Info box */}
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 mb-8 text-left max-w-md mx-auto">
              <p className="text-slate-700 mb-3">
                Você pode ter chegado aqui porque:
              </p>
              <ul className="space-y-2 text-slate-600 list-disc pl-5">
                <li>O endereço foi digitado incorretamente</li>
                <li>A página foi movida ou excluída</li>
                <li>O link que você clicou está desatualizado</li>
              </ul>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 justify-center max-w-md mx-auto">
              <Link 
                to="/" 
                className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded transition-colors duration-200 inline-flex items-center"
              >
                <Home className="mr-2 h-4 w-4" />
                Página inicial
              </Link>
              
              <button 
                onClick={() => window.history.back()}
                className="px-6 py-2 border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium rounded transition-colors duration-200 inline-flex items-center"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <style>
        {`
          @keyframes pulse-slow {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.8;
            }
          }
          .animate-pulse-slow {
            animation: pulse-slow 3s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default NotFound;
