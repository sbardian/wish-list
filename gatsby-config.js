module.exports = {
  siteMetadata: {
    title: 'Amazon wish list viewer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-emotion',
    // TODO: remove if not pulling anything from json/file system
    // 'gatsby-transformer-json',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: './src/wish-list',
    //   },
    // },
    {
      resolve: 'gatsby-source-amazon-wishlist',
      options: {
        wishlistUrl: 'https://www.amazon.com/hz/wishlist/ls/1H5VWB16TALUC',
      },
    },
  ],
};
