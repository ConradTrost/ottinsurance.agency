import * as React from "react";
import { Link, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Header from "../components/header";

const BlogArchive = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allContentfulBlogPost.edges;

  if (posts.length === 0) {
    return (
      <div location={location} title={siteTitle}>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the
          "gatsby-source-filesystem" plugin in gatsby-config.js).
        </p>
      </div>
    );
  }

  return (
    <div location={location} title={siteTitle}>
      <Helmet>
        <title>Blog Archive</title>
      </Helmet>
      <Header />
      <div className="h-40"></div>
      <div>
        <ol style={{ listStyle: `none` }} className="flex">
          {posts.map((post) => {
            const title = post.node.title || post.node.slug;

            return (
              <li key={post.node.slug} className="w-3/5 m-auto">
                <article className="post-list-item" itemScope itemType="http://schema.org/Article">
                  <div>
                    <h3 className="text-xl">
                      <Link to={post.node.slug} itemProp="url">
                        <span itemProp="headline">{post.node.title}</span>
                      </Link>
                    </h3>
                    <p className="m-0">{post.node.author}</p>
                    <small>{post.node.createdAt}</small>
                  </div>
                  <div>{post.node.excerpt.excerpt}...</div>
                  <Link to={post.node.slug} itemProp="url">
                    <span className="text-blue-600 underline">Read More</span>
                  </Link>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default BlogArchive;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
          author
          excerpt {
            excerpt
          }
        }
      }
    }
  }
`;
