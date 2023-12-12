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
              email
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
              email
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
  async getTargetAuthor(email) {
    try {
      const query = gql`
        query MyQuery {
          author(where: { email: "${email}" }) {
            bio
            email
            name
            photo {
              url
            }
            posts {
              excerpt
              thumbnail {
                url
              }
              updatedAt
              title
            }
          }
        }
      `;

      return await this.client.request(query);
    } catch (error) {
      console.log("Hygraph serive :: getTargetAuthor :: error", error);
      return false;
    }
  }

  async deleteBlog(slug) {
    try {
      const mutation = gql`
      mutation MyMutation {
        deleteBlog(where: {slug: "${slug}"}) {
          id
        }
      }
`;
      return await this.client.request(mutation);
    } catch (error) {
      console.log("Hygraph serive :: deleteBlog :: error", error);
      return false;
    }
  }

  async createBlog(title, slug, content, thumbnail) {
    try {
      const mutation = gql`
      mutation MyMutation {
        deleteBlog(where: {slug: "${slug}"}) {
          id
        }
      }
`;
      return await this.client.request(mutation);
    } catch (error) {
      console.log("Hygraph serive :: createBlog :: error", error);
    }
  }
  async updateBlog(title, slug, content, thumbnail) {
    try {
      const mutation = gql`
      mutation MyMutation {
        deleteBlog(where: {slug: "${slug}"}) {
          id
        }
      }
`;
      return await this.client.request(mutation);
    } catch (error) {
      console.log("Hygraph serive :: updateBlog :: error", error);
    }
  }

  async createAuthor(email, name) {
    try {
      const mutation = gql`
      mutation MyMutation {
        createAuthor(
        data: {name: "${name}", email: "${email}", bio: "DelTech MUN pride member, ready to take onto ant challenge of the world."}
      ) {
        id
        bio
        email
        name
      }
      publishAuthor(where: {email: "${email}"}, to: PUBLISHED) {
        id
      }
    }
      `;
      return await this.client.request(mutation);
    } catch (error) {
      console.log("Hygraph serive :: createAuthor :: error", error);
    }
  }
  
  // ${formValue.dp.name ? "photo: {create: {fileName:"+ `"${formValue.dp.name}"`+", "+" handle: "+`"${formValue.dp.name}"`+"}}" :""}
  async updateProfile(email, formValue) {
    try {
      const mutation = gql`
      mutation MyMutation {
        updateAuthor(
          data: {
            ${formValue.name ? "name:"+ `"${formValue.name}"` +", " : ``} 
            ${formValue.bio ? "bio:"+ `"${formValue.bio}"` +", ": ``} 
          }
          where: {email: "${email}"}
        ) {
          id
          name
          bio
        }
        publishAuthor(where: {email: "${email}"}, to: PUBLISHED) {
          id
        }
      }
`;
      return await this.client.request(mutation);
    } catch (error) {
      console.log("Hygraph serive :: updateAuthor :: error", error);
    }
  }
}

const service = new Service();
export default service;
