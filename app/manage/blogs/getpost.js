"use server";
import { gql } from "@apollo/client";
import { getClient } from "@/app/lib/client";
export default async function GetPost_admin(session) {
  console.log(session);
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

  return data;
}
