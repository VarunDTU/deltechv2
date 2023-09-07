import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { getClient } from "../lib/client";
import BlogCard from "./BlogCard";

const BlogsSection = async () => {
  const query = gql`
query MyQuery {
  blogs {
    categories {
      ... on Category {
        id
        name
      }
    }
    featuredBlog
    id
    excerpt
    createdAt
    slug
    title
    content {
      html
    }
    thumbnail {
      url
    }
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
      {data.blogs.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.title}
          img={blog.thumbnail.url}
          excerpt={blog.excerpt}
        />
      ))}
    </div>
  );
};

export default BlogsSection;
