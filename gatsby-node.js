/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const teamTemplate = require.resolve("./src/templates/team.js");

  const result = await graphql(`
    {
      allFile(filter: {sourceInstanceName: {eq: "teams"}}) {
        nodes {
          name
          childMarkdownRemark {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error while running pages GraphQL query");
    return;
  }

  result.data.allFile.nodes.forEach((node) => {
    // Filter out nodes with no title (editorial/extra content)
    if (node.childMarkdownRemark.frontmatter.title == "") {
      return;
    }

    createPage({
      path: node.name,
      component: teamTemplate,
      context: {
        name: node.name
      }
    });
  });
}