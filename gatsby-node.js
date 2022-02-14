const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

  return graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              title
              author
              slug
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create Blog Pages
    const posts = result.data.allContentfulBlogPost.edges;

    posts.forEach((post, index) => {
      createPage({
        path: "blog/" + post.node.slug,
        component: blogPostTemplate,
        context: {
          slug: post.node.slug,
        },
      });
    });
  });
};
