module.exports = {
  siteMetadata: {
    title: 'Krystal Klumpp',
    description: 'Portfolio site by Krystal Klumpp',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/layout/Layout.js'),
        },
      },
    },
  ],
};
