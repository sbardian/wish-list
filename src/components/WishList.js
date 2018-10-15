import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { css } from 'react-emotion';

export default ({}) => {
  const name = 'Brian'.toLowerCase();
  return (
    <StaticQuery
      query={graphql`
        {
          allAmazonWishlistItem {
            edges {
              node {
                id
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
      `}
      render={data => {
        console.log('data = ', data);
        const {
          allAmazonWishlistItem: { edges },
        } = data;
        return (
          <div
            className={css`
              display: grid;
              grid-template-columns: 1fr;
            `}
          >
            {edges.map(item => {
              if (item.node.comment.toLowerCase() === name) {
                return <li key={item.node.id}>{item.node.title}</li>;
              }
            })}
          </div>
        );
      }}
    />
  );
};
