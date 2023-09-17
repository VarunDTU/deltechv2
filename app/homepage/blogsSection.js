import { graphqlClient, blogsQuery } from "@/app/lib/graphqlClient";
import BlogCard from "@/app/components/BlogCard";
import Heading from "../components/Heading";
const BlogsSection = async () => {
  const { data } = await graphqlClient.request(blogsQuery);
  
  return (
    <div className="my-12">
      <div className="w-full relative py-10">
        <Heading background="&nbsp;blogs&nbsp;" main="Blogs&nbsp;" />
      </div>
      <div className="flex justify-center items-center mt-24 ">
        <div className="max-w-full mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-20 px-10 py-5">
          {data.blogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              img={blog.thumbnail.url}
              excerpt={blog.excerpt}
              createdAt={blog.createdAt.slice(0, 10)}
              authorName={blog.author.name}
              authorPhoto={
                blog.author.photo?.url ||
                "https://assets-prod.sumo.prod.webservices.mozgcp.net/static/default-FFA-avatar.2f8c2a0592bda1c5.png"
              }
              slug={blog.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
