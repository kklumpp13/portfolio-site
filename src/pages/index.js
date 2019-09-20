import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layout/Layout';

export default () => (
  <Layout>
    <h1>Home</h1>
    <p>Hello</p>
    <Link to="/about/">Learn about me</Link>
  </Layout>
);
