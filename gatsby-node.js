const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        site {
          siteMetadata {
            owners {
              name
            }
          }
        }
      }
    `).then(result => {
      result.data.site.siteMetadata.owners.forEach(owner => {
        createPage({
          path: owner.name,
          component: path.resolve(`./src/templates/wishlists.js`),
          context: {
            slug: owner.name,
            owner: owner.name,
          },
        });
      });
      resolve();
    });
  });
};
