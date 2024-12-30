type Post = {
    title: string; // Title of the blog post
    content: string; // Content/body of the blog post
    slug: string; // Unique identifier for each post, used in routing
  };
  
  // Generate static paths for dynamic routes
  export async function generateStaticParams(): Promise<{ slug: string }[]> {
    // Fetch the list of posts from an external API
    const posts: Post[] = await fetch('https://jsonplaceholder.typicode.com/posts/').then((res) =>
      res.json()
    );
  
    // Map over the posts to extract and return their slugs, which will be used for dynamic routing
    return posts.map((post) => ({
      slug: post.slug,
    }));
  }
  
  type BlogPostProps = {
    params: { slug: string }; // Route parameters, specifically the 'slug'
  };
  
  const BlogPost: React.FC<BlogPostProps> = async ({ params }) => {
    const { slug } = params; // Extract the 'slug' from the parameters
  
    // Fetch the specific post data based on the slug from the external API
    const post: Post = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
      next: { revalidate: 60 }, // Revalidate (or refresh) the page data every 60 seconds
    }).then((res) => res.json());
  
    // Render the blog post details in a simple layout
    return (
      <div>
        <h1>{post.title}</h1> {/* Render the title of the blog post */}
        <p>{post.content}</p> {/* Render the content/body of the blog post */}
      </div>
    );
  };
  
  export default BlogPost; // Export the component as the default export
  
  /*
  NOTES:
  1. The `generateStaticParams` function is responsible for creating paths dynamically for all blog posts.
     - It fetches data from an API and maps it to a list of `slug` values used for routing.
  2. The `BlogPost` component fetches a specific post's data based on the `slug`.
     - It uses Incremental Static Regeneration (ISR) to revalidate the content every 60 seconds.
  3. The external API (jsonplaceholder) doesn’t provide a `slug` field. You'll need to generate one manually or use an existing identifier like `id`.
  4. This code assumes a Next.js app structure (`app/blog/[slug]/page.tsx`).
     - `page.tsx` serves as the main entry point for the dynamic route.
  5. Error handling for API calls is missing and should be added to ensure graceful failures.
  6. If you're using `slug`, make sure it matches the format expected by the API and routing system.
  */
  