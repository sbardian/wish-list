module.exports = {
  siteMetadata: {
    title: 'Amazon Wish Lists',
    owners: [
      {
        name: 'brian',
      },
      {
        name: 'brian2',
      },
    ],
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
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: './src/utils/typography.js',
      },
    },
    // TODO: remove if not pulling anything from json/file system
    // 'gatsby-transformer-json',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: './src/wish-list',
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: 'src',
      },
    },
    {
      resolve: '@sbardian/gatsby-source-amazon-wishlist',
      options: {
        lists: [
          {
            owner: 'brian',
            wishlistUrl: 'https://www.amazon.com/hz/wishlist/ls/23SS72WRRLNI3',
          },
          {
            owner: 'brian2',
            wishlistUrl: 'https://www.amazon.com/hz/wishlist/ls/UEIS98RI522R',
          },
        ],
      },
    },
  ],
};
