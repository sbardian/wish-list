import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>hey</h1>
        {data.allAmazonWishlistItem.edges.map(item => (
          <div key={item.node.id}>
            <span>{item.node.title}</span>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const wishtListQuery = graphql`
  query getAllAmazonWishlistItems($owner: String!) {
    allAmazonWishlistItem(filter: { owner: { eq: $owner } }) {
      edges {
        node {
          id
          owner
          title
          url
          price
          features
          comment
          priority
          purchased
          requested
          image {
            url
          }
        }
      }
    }
  }
`;
