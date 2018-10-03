import React from 'react';
import 'normalize.css';
import Layout from '../components/Layout';
import WishList from '../components/WishList';

const IndexPage = () => (
  <Layout>
    <h1>Select a wish list</h1>
    <WishList />
  </Layout>
);

export default IndexPage;
