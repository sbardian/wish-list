import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'emotion';
import Layout from '../components/Layout';

export default ({ data }) => {
  return (
    <Layout>
      <div
        className={css`
          display: grid;
          grid-gap: 20px;
          grid-template-columns: 1fr;
          justify-content: center;
        `}
      >
        <h1>
          {`${data.allAmazonWishlistItem.group[0].edges[0].node.owner.toUpperCase()}'s wish list`}
          title
        </h1>
        {data.allAmazonWishlistItem.group
          .sort((a, b) => {
            const priorities = ['highest', 'high', 'medium', 'low', 'lowest'];
            if (
              priorities.indexOf(a.fieldValue) <
              priorities.indexOf(b.fieldValue)
            ) {
              return -1;
            }
            if (
              priorities.indexOf(a.fieldValue) >
              priorities.indexOf(b.fieldValue)
            ) {
              return 1;
            }
            return 0;
          })
          .map(edge => {
            console.log('edge = ', edge.edges);
            return edge.edges.map(item => (
              <div
                key={item.node.id}
                className={css`
                  display: grid;
                  grid-gap: 20px;
                  grid-template-columns: minmax(100px, 200px) 1fr;
                  padding: 20px;
                  border-bottom: 1px solid #666;
                  background-color: #e1e1e1;
                `}
              >
                <div>
                  <img src={item.node.image.url} alt={item.node.title} />
                </div>
                <div>
                  <div
                    className={css`
                      margin-bottom: 10px;
                    `}
                  >
                    <a href={item.node.url}>{item.node.title}</a>
                  </div>
                  <div>
                    <span>{item.node.price}</span>
                  </div>
                  <div>
                    <span>{item.node.features}</span>
                  </div>
                </div>
                <div>
                  <div>
                    <span>Priority: {item.node.priority}</span>
                  </div>
                  <div>
                    <span>Quantity: {item.node.requested}</span>
                  </div>
                </div>
              </div>
            ));
          })}
      </div>
    </Layout>
  );
};

export const wishtListQuery = graphql`
  query getAllAmazonWishlistItems($owner: String!) {
    allAmazonWishlistItem(filter: { owner: { eq: $owner } }) {
      group(field: priority) {
        fieldValue
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
  }
`;
