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

  async updateProfile(email, formValue) {
    try {
      const {publishAsset} = await this.uploadAsset(formValue.dp);
      const mutation = gql`
      mutation MyMutation {
        updateAuthor(
          data: {
            ${formValue.name ? "name:" + `"${formValue.name}"` + ", " : ``} 
            ${formValue.bio ? "bio:" + `"${formValue.bio}"` + ", " : ``} 
            ${publishAsset ? "photo: {connect: {id:"+ `"${publishAsset.id}"`+"}}" : ``}
          }
          where: {email: "${email}"}
        ) {
          id
          name
          bio
          photo {
            url
          }
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
  async uploadAsset(file) {
    try {
      const form = new FormData();
      form.set("fileUpload", file);
      let response = await fetch(
        "https://api-ap-south-1.hygraph.com/v2/cll17xuiw27b801uj95n22vxn/master/upload",
        {method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
          },
          body: form,
        }
      );
      response = await response.json();

      const mutation = gql`
      mutation MyMutation {
        publishAsset(where: {id: "${response.id}"}, to: PUBLISHED) {
          id
        }
      }
`;
      return await this.client.request(mutation);
    } catch (error) {
      console.log("Hygraph serive :: uploadAsset :: error", error);
    }
  }
}

const service = new Service();
export default service;
