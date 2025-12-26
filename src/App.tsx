import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Code from "./pages/Code";
import Licenses from "./pages/Licenses";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Security from "./pages/Security";
import Cookies from "./pages/Cookies";
import Accessibility from "./pages/Accessibility";
import { PayloadData } from "@/components/PayloadData";
import { usePartnerRedirect } from "./hooks/usePartnerRedirect";

const queryClient = new QueryClient();

// Componente para lidar com redirecionamentos de parceiros
const PartnerRedirect = () => {
  const { processRedirect, loading } = usePartnerRedirect();
  
  // Mostra um indicador de carregamento enquanto processa o redirecionamento
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }
  
  // Redireciona para a home com os parâmetros UTM
  return <Navigate to="/" replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/codigo-de-conduta" element={<Code />} />
          <Route path="/licencas" element={<Licenses />} />
          <Route path="/privacidade" element={<Privacy />} />
          <Route path="/politica-de-privacidade" element={<Privacy />} />
          <Route path="/termos-de-uso" element={<Terms />} />
          <Route path="/seguranca" element={<Security />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/acessibilidade" element={<Accessibility />} />
          
          {/* Nova rota para redirecionamento de parceiros */}
          <Route path="/:partnerId" element={<PartnerRedirect />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
