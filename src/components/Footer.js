import React from "react";
import styled from "styled-components";

import config from "../config";
import theme from "@styles/theme";
import media from "@styles/media";

import GithubIcon from "@components/icons/github";
import LinkedinIcon from "@components/icons/linkedin";
import InstagramIcon from "@components/icons/instagram";

const StyledIcon = styled.a`
    padding: 10px;
    & svg {
        transition: ${theme.transition};
    }
`;

const socials = config.socialMedia.map((social, i) => {
    var icon;

    switch (social.name) {
        case "GitHub":
            icon = <GithubIcon />;
            break;
        case "Linkedin":
            icon = <LinkedinIcon />;
            break;
        case "Instagram":
            icon = <InstagramIcon />;
            break;
        default:
            icon = null;
            break;
    }

    return (
        <StyledIcon href={social.url} key={i}>
            {icon}
        </StyledIcon>
    );
});

const StyledContactInfo = styled.div`
    display: none;
    flex-flow: row;
    justify-content: space-evenly;
    align-items: center;
    & a {
        color: var(--text-color-secondary);
        font-family: ${theme.fonts.IBMPlexMono};
    }
    margin-bottom: 10px;

    ${media.tablet`
        display: flex;
    `}
`;

const StyledFooter = styled.footer`
    font-family: ${theme.fonts.IBMPlexMono};
    text-align: center;
    text-shadow: none;
    background-image: none;
    margin-bottom: 30px;
    & a {
        color: var(--text-color-secondary);

        &:hover {
            color: var(--accent-color);
        }
    }
`;

const Footer = () => (
    <>
        <StyledContactInfo>
            {socials}
            <a href={"mailto: " + config.email}>{config.email}</a>
        </StyledContactInfo>
        <StyledFooter>
            <a href={config.github + "/site-V2"}>
                © {new Date().getFullYear()}, Built with ❤ by {config.name}
            </a>
        </StyledFooter>
    </>
);

export default Footer;
