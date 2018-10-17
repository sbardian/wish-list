import React, { Component } from 'react';
import 'normalize.css';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';

class IndexPage extends Component {
  render() {
    const { owners } = this.props.data.site.siteMetadata;
    return (
      <Layout>
        <h1>Select wish list:</h1>
        {owners.map(owner => (
          <div key={owner.name}>
            <Link to={owner.name}>{owner.name}</Link>
          </div>
        ))}
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
