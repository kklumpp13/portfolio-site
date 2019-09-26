import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layout/layout';

export default () => (
  <Layout>
    <h1>Test page</h1>
    <p>Testing</p>
    <Link to="/">Home</Link>
  </Layout>
);
