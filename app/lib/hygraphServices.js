import { GraphQLClient, gql } from "graphql-request";

export class Service {
  client;
  constructor() {
    this.client = new GraphQLClient(process.env.NEXT_PUBLIC_API_HYGRAPH);
  }
  async getBlogs() {
    try {
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
            readMoreLink
          }
        }
      `;
      return await this.client.request(query);
    } catch (error) {
      console.log("Hygraph serive :: getBlogs :: error", error);
    }
  }

  async getTargetBlog(slug) {
    try {
      const query = gql`
        query MyQuery {
          blog(where: { slug: "${slug}" }) {
            author {
              name
              bio
              photo {
                url
              }
            }
            createdAt
            title
            content {
              raw
            }
            thumbnail {
              url
            }
          }
        }
      `;

      return await this.client.request(query);
    } catch (error) {
      console.log("Hygraph serive :: getBlogDetails :: error", error);
      return false;
    }
  }

  async deleteBlog(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Hygraph serive :: deleteBlog :: error", error);
      return false;
    }
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: updatePost :: error", error);
    }
  }
}

const service = new Service();
export default service;
