import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layout/layout';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';

export default () => {
  const posts = usePosts();

  return (
    <Layout>
      <h1>Home</h1>
      <p>Hello</p>
      <Link to="/about/">Learn about me</Link>
      <Link to="/test/">Test</Link>

      <h2>Read posts</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
};
