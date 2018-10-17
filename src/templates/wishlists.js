import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'emotion';
import Layout from '../components/Layout';

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1
        >{`${data.allAmazonWishlistItem.edges[0].node.owner.toUpperCase()}'s wish list`}</h1>
        {data.allAmazonWishlistItem.edges.map(item => (
          <div
            key={item.node.id}
            className={css`
              padding: 20px;
              border-bottom: 1px solid #666;
            `}
          >
            <span>
              <a href={item.node.url}>{item.node.title}</a>
            </span>
            <div>
              <img src={item.node.image.url} alt={item.node.title} />
            </div>
            <div>
              <span>{item.node.price}</span>
            </div>
            <div>
              <span>{item.node.features}</span>
            </div>
            <div>
              <span>{item.node.priority}</span>
            </div>
            <div>
              <span>qty: {item.node.requested}</span>
            </div>
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
