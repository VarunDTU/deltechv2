import { gql } from "@apollo/client";
import { getClient } from "../lib/client";
import BlogCard from "../components/BlogCard";
const BlogsSection = async () => {
  const query = gql`
    query MyQuery {
      blogs {
        author {
          name
          photo {
            url
          }
        }
        createdAt
        excerpt
        slug
        thumbnail {
          url
        }
        title
      }
    }
  `;
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 200 },
      },
    },
  });

  // console.log(data)
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-20 px-10 py-5">
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
  );
};

export default BlogsSection;
