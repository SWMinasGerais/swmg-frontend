import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, User, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogPost, CategoryConfig } from "@/modules/blog/types";

interface BlogPostCardProps {
  post: BlogPost;
  categoryConfig: CategoryConfig;
  featured?: boolean;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ 
  post, 
  categoryConfig, 
  featured = false 
}) => {
  if (featured) {
    return (
      <div className="bg-white rounded-2xl border border-neutral-100 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-64 lg:h-auto overflow-hidden relative bg-gradient-to-br from-neutral-100 to-neutral-50">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <FileText className="w-10 h-10 text-neutral-300" />
            </div>
          </div>
          <div className="p-6 lg:p-8 flex flex-col justify-center">
            <div className="flex items-center mb-3">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#E4002B] bg-[#E4002B]/5 px-2.5 py-1 rounded-full">
                {categoryConfig[post.category].label}
              </span>
              <span className="text-neutral-400 text-xs ml-3">{post.readTime} de leitura</span>
            </div>

            <h3 className="text-2xl font-bold text-[#111] leading-snug mb-4">
              {post.title}
            </h3>

            <p className="text-sm text-neutral-500 mb-6">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center">
                <User className="h-4 w-4 text-[#E4002B] mr-2" />
                <span className="text-xs text-neutral-400">{post.author}</span>
              </div>
              <div className="flex items-center text-xs text-neutral-400">
                <Calendar className="h-4 w-4 mr-2" />
                {post.date}
              </div>
            </div>
            
            <Button 
              className="mt-6 bg-red-600 hover:bg-red-700 text-white group relative overflow-hidden"
            >
              <Link to={`/blog/${post.slug}`}>
                <span className="relative z-10">Ler artigo completo</span>
                <span className="absolute inset-0 h-full w-full opacity-0 group-hover:opacity-25 transition-opacity duration-300 bg-white" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-white rounded-2xl border border-neutral-100 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group h-full flex flex-col"
    >
      <div className="h-48 overflow-hidden relative bg-gradient-to-br from-neutral-100 to-neutral-50 flex items-center justify-center">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <FileText className="w-8 h-8 text-neutral-300" />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#E4002B] bg-[#E4002B]/5 px-2.5 py-1 rounded-full">
            {categoryConfig[post.category].label}
          </span>
          <span className="text-neutral-400 text-xs">{post.readTime} de leitura</span>
        </div>

        <h3 className="text-xl font-bold text-[#111] leading-snug mb-3">
          {post.title}
        </h3>

        <p className="text-sm text-neutral-500 mb-6 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <User className="h-4 w-4 text-[#E4002B] mr-2" />
            <span className="text-xs text-neutral-400">{post.author}</span>
          </div>
          <div className="flex items-center text-xs text-neutral-400">
            <Calendar className="h-4 w-4 mr-2" />
            {post.date}
          </div>
        </div>
        
        <Button 
          variant="link" 
          className="mt-4 text-red-600 hover:text-red-700 p-0 h-auto font-medium group/btn"
        >
          <Link to={`/blog/${post.slug}`}>
            Continuar lendo
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogPostCard; 