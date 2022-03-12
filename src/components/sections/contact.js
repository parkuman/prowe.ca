import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

import media from "@styles/media";
import theme from "@styles/theme";
import { OutlineButton } from "@components/Buttons";
import IdHrefAnchor from "@components/IdHrefAnchor";

import config from "../../config";

const StyledContact = styled.section`
  /* height: 40vh; */
  padding-bottom: 200px;
`;

const StyledHeader = styled.h1`
  color: var(--text-color-primary);
  font-size: 4rem;
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-style: normal;
  text-align: center;

  &:before {
    content: "04. ";
    font-family: ${theme.fonts.IBMPlexMono};
    font-size: 1.5rem;
    color: var(--accent-color);
    ${media.phone`
            font-size: 1rem;
        `}
  }

  ${media.tablet`
        font-size: 3rem;
    `}
`;

const StyledContent = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInfo = styled.div`
  color: var(--text-color-secondary);
  margin: 40px 0;

  width: 70%;
  font-size: 1.1rem;
  text-align: center;

  ${media.tablet`
            width: 100%;
        `}

  & a {
    color: var(--accent-color);
    &:hover {
      color: var(--text-color-primary);
    }
  }
`;

const Contact = ({ data }) => {
  const { frontmatter, html } = data[0].node;

  return (
    <Fade bottom distance="80px">
      <IdHrefAnchor id="contact" />
      <StyledContact>
        <StyledHeader>{frontmatter.title}</StyledHeader>
        <StyledContent>
          <StyledInfo dangerouslySetInnerHTML={{ __html: html }}></StyledInfo>
          <OutlineButton href={"mailto:" + config.email}>Contact</OutlineButton>
        </StyledContent>
      </StyledContact>
    </Fade>
  );
};

export default Contact;
