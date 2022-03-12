import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Img from "gatsby-image";

import theme from "@styles/theme";
import media from "@styles/media";

import IdHrefAnchor from "@components/IdHrefAnchor";


const StyledAbout = styled.section`
  padding: 100px 50px;
  margin-bottom: 150px;
  height: auto;

  ${media.tablet`
            padding: 50px 0;
    `}
`;

const StyledHeader = styled.h1`
  color: var(--text-color-primary);
  font-size: 4rem;
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-style: normal;

  &:before {
    content: "01. ";
    font-family: ${theme.fonts.IBMPlexMono};
    font-size: 1.5rem;
    color: var(--accent-color);

    ${media.phone`
            font-size: 1rem;
        `}
  }

  ${media.tablet`
        font-size: 3rem;
        text-align: center;
        margin-bottom: 20px;
    `}
  ${media.phone`
        text-align: left;
    `}
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${media.tablet`
        flex-direction: column-reverse;
    `}
`;

const StyledInfo = styled.div`
  color: var(--text-color-secondary);
  margin-top: 40px;
  width: 60%;

  font-size: 1.1rem;

  & a {
    color: var(--accent-color);
    &:hover {
      color: var(--text-color-primary);
    }
  }

  ${media.tablet`
        width: 100%;
    `}
`;

const StyledProfilePic = styled.div`
  position: relative;
  width: 40%;

  margin-left: 60px;

  ${media.tablet`
    width: 60%;
        max-width: 60vw;
        
        margin: 0 auto; 
    `}
  ${media.phone`
    font-size: 2rem;
        width: 100%;
        max-width: 100vw;
        margin-left: 0;


        
    `}
`;

const StyledSkills = styled.ul`
  list-style: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 40px;
  color: var(--text-color-secondary);
  & li {
    display: inline-block;
    padding: 0 20px;

    &:before {
      content: "→ ";
      color: var(--accent-color);
    }
  }
`;

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const profilePicFluid = frontmatter.profilePic.childImageSharp.fluid;

  return (
    <Fade bottom distance="80px">
      <StyledAbout>
        <IdHrefAnchor id="about" />
        <StyledHeader>{frontmatter.title}</StyledHeader>
        <StyledContent>
          <StyledInfo>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
            {/* <StyledSkills>
                            {frontmatter.skills.map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </StyledSkills> */}
          </StyledInfo>

          <StyledProfilePic>
            <Img fluid={profilePicFluid} />
          </StyledProfilePic>
        </StyledContent>
      </StyledAbout>
    </Fade>
  );
};
export default About;
