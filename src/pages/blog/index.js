import Layout from "@components/Layout";
import React from "react";
import { graphql } from "gatsby";
import SEO from "@components/SEO";
import Nav from "@components/Nav";


const Blog = ({ data }) => (
  <Layout>
    <SEO title="Blog" description="Where Parker rambles about his woes" />

    <Nav />

  </Layout>
);

export default Blog;


export const pageQuery = graphql`
    {
      hero: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/hero/" } }
    ) {
        edges {
            node {
                frontmatter {
                    greeting
                    name
                    subtitle
                    tools
                }
                html
            }
        }
    }


    }
`;