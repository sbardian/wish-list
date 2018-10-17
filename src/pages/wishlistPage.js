import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import WishList from '../components/WishList';

class WishListPage extends Component {
  render() {
    console.log('data = ', this.props);
    const {
      data: {
        allAmazonWishlistItem: { edges },
      },
    } = this.props;
    return (
      <div>
        <WishList items={edges} />
      </div>
    );
  }
}

export default WishListPage;

export const wishtListQuery = ({
  location: {
    state: { owner },
  },
}) =>
  graphql(
    `
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
    `,
    { wishlist: owner }
  );
