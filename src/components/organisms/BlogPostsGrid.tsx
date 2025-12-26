import { BlogPost, CategoryConfig } from "@/modules/blog/types";
import BlogPostCard from "@/components/molecules/BlogPostCard";

interface BlogPostsGridProps {
  posts: BlogPost[];
  categoryConfig: CategoryConfig;
}

export const BlogPostsGrid: React.FC<BlogPostsGridProps> = ({ posts, categoryConfig }) => {
  // The first post is featured, the rest are in a grid
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <div className="space-y-12">
      {/* Featured post */}
      <BlogPostCard 
        post={featuredPost} 
        categoryConfig={categoryConfig} 
        featured={true} 
      />

      {/* Regular posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularPosts.map(post => (
          <BlogPostCard 
            key={post.id} 
            post={post} 
            categoryConfig={categoryConfig} 
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPostsGrid; 