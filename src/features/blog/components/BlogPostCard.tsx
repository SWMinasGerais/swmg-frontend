import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, User } from "lucide-react";
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
      <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-slate-100/50 group">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-64 lg:h-auto overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/800x600/eef/046?text=Blog";
              }}
            />
          </div>
          <div className="p-6 lg:p-8 flex flex-col justify-center">
            <div className="flex items-center mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryConfig[post.category].color}`}>
                {categoryConfig[post.category].label}
              </span>
              <span className="text-slate-400 text-xs ml-3">{post.readTime} de leitura</span>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {post.title}
            </h3>
            
            <p className="text-slate-600 mb-6">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center">
                <User className="h-4 w-4 text-red-600 mr-2" />
                <span className="text-sm font-medium">{post.author}</span>
              </div>
              <div className="flex items-center text-sm text-slate-500">
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
      className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border border-slate-100/50 group h-full flex flex-col"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://placehold.co/800x600/eef/046?text=Blog";
          }}
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryConfig[post.category].color}`}>
            {categoryConfig[post.category].label}
          </span>
          <span className="text-slate-400 text-xs">{post.readTime} de leitura</span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-3">
          {post.title}
        </h3>
        
        <p className="text-slate-600 mb-6 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <User className="h-4 w-4 text-red-600 mr-2" />
            <span className="text-sm">{post.author}</span>
          </div>
          <div className="flex items-center text-sm text-slate-500">
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