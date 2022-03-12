import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components";

import media from "@styles/media";

import Layout from "@components/Layout";
import SEO from "@components/SEO";
import Nav from "@components/Nav";

const BlogPostWrapper = styled.main`
  padding-top: 150px;
  margin: 0 auto;
  max-width: 80%;
  ${media.tablet`
    max-width: 90%;
  `}
`;


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Nav />

      <BlogPostWrapper>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </BlogPostWrapper>
    </Layout>

  )
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`