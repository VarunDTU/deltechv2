import { gql } from "@apollo/client";
import { getClient } from "@/app/lib/client";
import BlogCard from "@/app/components/BlogCard";

const BlogHero = async () => {
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
    <div>
      <div className="bg-[#040b23]">
        <div
          style={{ backgroundImage: `url(./img/section.png)` }}
          className="w-full h-full bg-center py-10 bg-cover"
        >
          <div className="mx-auto max-w-screen-sm text-center pt-28 lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white ">
              Our Blog
            </h2>
            <p className="font-light text-gray-400 sm:text-xl">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-12 ">
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

export default BlogHero;
