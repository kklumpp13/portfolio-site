import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layout/Layout';

export default () => (
  <Layout>
    <h1>About me</h1>
    <p>This is my personal site.</p>
    <Link to="/">Home</Link>
  </Layout>
);
