import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../layout/layout';
import ReadLink from '../components/read-link';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: {eq: $slug }}) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p>{post.frontmatter.author}</p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <ReadLink to="/">Back to all posts</ReadLink>
  </Layout>
);

export default PostTemplate;
