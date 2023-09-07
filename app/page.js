import { getClient } from "./lib/client";

import { gql } from "@apollo/client";
import HeroSection from "./homepage/herosection";
import BlogsSection from "./components/BlogsSection";

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
export default function Page() {
  
 
  return <div>
    
    <HeroSection/>
    <BlogsSection></BlogsSection>
    </div>
}
