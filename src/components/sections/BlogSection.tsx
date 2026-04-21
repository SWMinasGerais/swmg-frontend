import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts, categoryConfig } from "@/modules/blog/data";
import SectionTitle from "@/components/atoms/SectionTitle";
import BlogPostsGrid from "@/components/organisms/BlogPostsGrid";
import NewsletterSignup from "@/components/molecules/NewsletterSignup";

const BlogSection = () => {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <SectionTitle 
            eyebrow="Blog & Notícias" 
            title="Dicas e histórias de sucesso"
            description="Conteúdos exclusivos sobre empreendedorismo, inovação e o ecossistema de startups em Minas Gerais."
          />
          
          <div className="mt-6 md:mt-0">
            <Button 
              variant="outline" 
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white group"
            >
              <Link to="/blog" className="hover:underline">
                Ver todos os artigos
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Blog posts grid with featured post */}
        <BlogPostsGrid posts={blogPosts} categoryConfig={categoryConfig} />

        {/* Newsletter subscription */}
        <div className="mt-16">
          <NewsletterSignup />
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 