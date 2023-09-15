import { GraphQLClient, gql } from "graphql-request";

export const client = new GraphQLClient(process.env.NEXT_PUBLIC_API_HYGRAPH);

export const blogsQuery = gql`
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
