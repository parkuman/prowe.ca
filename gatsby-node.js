/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions;

//   const result = await graphql(
//     `
//       {
//         allMarkdownRemark(filter: { fileAbsolutePath: {regex : "\/blog/"} },) {
//           edges{
//             node{
//               frontmatter {
//                 path
//                 title
//               }
//               html
//               id
//             }
//           }
//         }
//       }
//     `
//   );

//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`);
//     return;
//   };


//   // Create pages for each markdown file.
//   const blogPostTemplate = path.resolve(`src/templates/post.js`);
//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     const postPath = node.frontmatter.path;
//     createPage({
//       // path: `/blog${postPath}`,
//       path: postPath,
//       component: blogPostTemplate,
//       // In your blog post template's graphql query, you can use pagePath
//       // as a GraphQL variable to query for data from the markdown file.
//       context: {
//         path: postPath,
//       },
//     });
//   });

// };


// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  // https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules
  // if (stage === 'build-html') {
  //   actions.setWebpackConfig({
  //     module: {
  //       rules: [
  //         {
  //           test: /scrollreveal/,
  //           use: loaders.null(),
  //         },
  //         {
  //           test: /animejs/,
  //           use: loaders.null(),
  //         },
  //       ],
  //     },
  //   });
  // }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@config": path.resolve(__dirname, "src/config"),
        "@fonts": path.resolve(__dirname, "src/fonts"),
        "@images": path.resolve(__dirname, "src/images"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@utils": path.resolve(__dirname, "src/utils"),
      },
    },
  })
}
