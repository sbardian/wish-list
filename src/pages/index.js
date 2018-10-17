import React, { Component } from 'react';
import { css } from 'emotion';
import 'normalize.css';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';

class IndexPage extends Component {
  render() {
    const { owners } = this.props.data.site.siteMetadata;
    return (
      <Layout>
        <h1
          className={css`
            display: grid;
            justify-content: center;
            color: #e1e1e1;
          `}
        >
          Select wish list
        </h1>
        <div
          className={css`
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(auto-fill, minmax(150px, 250px));
            justify-content: center;
            align-items: center;
          `}
        >
          {owners.map(owner => (
            <Link key={owner.name} to={owner.name}>
              <div
                className={css`
                  height: 200px;
                  background-color: #b39c82;
                  font-size: 38pt;
                  color: #e1e1e1;
                  display: grid;
                  justify-content: center;
                  align-items: center;
                  text-transform: uppercase;
                  text-rendering: optimizeLegibility;
                `}
              >
                {owner.name}
              </div>
            </Link>
          ))}
        </div>
      </Layout>
    );
  }
}

export default IndexPage;

export const ownerQuery = graphql`
  {
    site {
      siteMetadata {
        owners {
          name
        }
      }
    }
  }
`;
