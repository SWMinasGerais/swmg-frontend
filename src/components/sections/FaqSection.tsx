import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  HelpCircle, 
  Mail,
  ExternalLink,
} from "lucide-react";
import SectionTitle from "@/components/atoms/SectionTitle";
import SearchInput from "@/components/atoms/SearchInput";
import FilterButton from "@/components/atoms/FilterButton";
import FaqAccordion from "@/components/organisms/FaqAccordion";
import { FaqCategory } from "@/modules/faq/types";
import { faqItems, categoryConfig } from "@/modules/faq/data";

const FaqSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<FaqCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter FAQ items based on selected category and search query
  const filteredFaqs = faqItems.filter(item => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Create category options for filter buttons
  const categoryOptions = Object.entries(categoryConfig).map(([key, { label, icon }]) => ({
    id: key,
    label,
    icon
  }));

  return (
    <section id="faq" className="py-14 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          eyebrow="Perguntas Frequentes"
          title="Tire suas dúvidas"
          description="Encontre respostas para as perguntas mais comuns sobre o Startup Weekend, inscrições, formato do evento e mais."
          align="center"
        />

        <div className="max-w-4xl mx-auto">
          {/* Search bar */}
          <div className="mb-8">
            <SearchInput 
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Buscar pergunta ou palavra-chave..." 
              className="py-6 bg-white/80 backdrop-blur-sm border-slate-100/50 rounded-xl"
            />
          </div>

          {/* Category filters */}
          <div className="mb-10 flex flex-wrap gap-2 justify-center">
            <FilterButton 
              isActive={selectedCategory === "all"}
              onClick={() => setSelectedCategory("all")}
            >
              Todas perguntas
            </FilterButton>
            
            {categoryOptions.map(option => (
              <FilterButton 
                key={option.id} 
                isActive={selectedCategory === option.id}
                onClick={() => setSelectedCategory(option.id as FaqCategory)}
                icon={option.icon}
              >
                {option.label}
              </FilterButton>
            ))}
          </div>

          {/* FAQ accordion */}
          {filteredFaqs.length > 0 ? (
            <FaqAccordion 
              items={filteredFaqs}
              categoryConfig={categoryConfig}
            />
          ) : (
            <div className="text-center py-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
              <HelpCircle className="mx-auto h-12 w-12 text-slate-300 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Nenhuma pergunta encontrada
              </h3>
              <p className="text-slate-600 mb-6">
                Tente ajustar sua busca ou selecionar outra categoria.
              </p>
              <Button
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
              >
                Limpar filtros
              </Button>
            </div>
          )}

          {/* Contact CTA */}
          <div className="mt-10 p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-slate-100/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Não encontrou o que procurava?
                </h3>
                <p className="text-slate-600">
                  Nossa equipe está pronta para responder qualquer dúvida que você ainda tenha.
                </p>
              </div>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="border-slate-300 text-slate-700 hover:border-red-600 hover:text-red-600"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar e-mail
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Acessar suporte
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection; 