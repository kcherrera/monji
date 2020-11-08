/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Monji`,
    description: `A personal finance website with the goal to empower young women.`,
  },
  plugins: [
    { 
      resolve: `gatsby-plugin-postcss`, 
      options: {
        postCssPlugins: [
          require(`tailwindcss`)
        ]
      }
    },
    { 
      resolve: `gatsby-plugin-styled-components`, 
      options: {

      }
    }
  ],
}
