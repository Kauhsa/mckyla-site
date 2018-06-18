module.exports = {
  siteMetadata: {
    title: 'McKylän Superarcade',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
        resolve: `gatsby-plugin-emotion`,
        options: {
            // Accepts all options defined by `babel-plugin-emotion` plugin.
        }
    }
]
}
