module.exports = {
  siteMetadata: {
    title: 'Krystal Klumpp',
    description: 'Portfolio site by Krystal Klumpp',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        mdx: false,
        contentPath: `src/slides`,
        basePath: '/slides/accessible-forms'
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      // What layout will be used for MDX files
      options: {
        defaultLayouts: {
          default: require.resolve('./src/layout/layout.js'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts'
      }
    },
  ],
};
