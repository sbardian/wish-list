import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'react-emotion';

const WishList = ({ data }) => {
  const { edges } = { data: { allAmazonWishlistItem } };

  return (
    <div
      className={css`
        display: grid;
        grid-template-columns: 1fr;
      `}
    >
      {edges.map(item => (
        <a href="${item.comment}">${item.comment}</a>
      ))}
    </div>
  );
};

export default WishList;

export const wishListQuery = graphql`
  {
    allAmazonWishlistItem {
      edges {
        node {
          id
          title
          url
          price
          featrues
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
