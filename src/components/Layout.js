import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from './Header';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          className={css`
            margin: 0 auto;
            max-width: 960px;
            &::after {
              content: '';
              /* background-image: url('http://www.alerjidernegi.org.tr/wp-content/uploads/2016/04/shopping-bags-820x510-728x453.jpg'); */
              background-repeat: no-repeat;
              background-size: cover;
              background-attachment: fixed;
              background-position: center;
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              z-index: -1;
            }
          `}
        >
          <div
            className={css`
              background-color: #b8c99d;
              margin: 0 20px 20px 20px;
              padding: 20px;
            `}
          >
            {children}
          </div>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
