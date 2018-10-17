import React, { Component } from 'react';
import 'normalize.css';
import { navigate } from 'gatsby';
import Layout from '../components/Layout';
import SelectOwner from '../components/SelectOwner';

class IndexPage extends Component {
  handleOwnerSelect = e => {
    console.log('value = ', e.target.value);
    navigate('/wishlistPage', { state: { owner: e.target.value } });
  };

  render() {
    return (
      <Layout>
        <h1>Select owner of wishlist</h1>
        <SelectOwner onChange={this.handleOwnerSelect} />
      </Layout>
    );
  }
}

export default IndexPage;
