import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

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
          <Route path="/payload-data" element={<PayloadData />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
