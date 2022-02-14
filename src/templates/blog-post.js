import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import Header from "../components/header";

const BlogPostTemplate = ({ data, location }) => {
  const post = data.contentfulBlogPost;
  const featuredImage = getImage(post.featuredImage);

  const body = documentToHtmlString(JSON.parse(post.body.raw));

  // TODO:: Update wrapper to Layout
  return (
    <div location={location} title={post.siteTitle}>
      <Helmet>
        <title>{post.title}</title>
      </Helmet>
      <Header />
      <div className="h-40"></div>
      <GatsbyImage image={featuredImage} alt={post.featuredImage.title} />
      <div className="flex">
        <article className="w-3/5 m-auto">
          <h1>{post.title}</h1>
          <p className="m-0">{post.author}</p>
          <p className="m-0">{post.createdAt}</p>
          <div dangerouslySetInnerHTML={{ __html: body }}></div>
        </article>
      </div>
    </div>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      author
      createdAt(formatString: "MMMM DD, YYYY")
      body {
        raw
      }
      featuredImage {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
        title
      }
    }
  }
`;
