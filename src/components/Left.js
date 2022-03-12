import React from "react";
import styled from "styled-components";

import theme from "@styles/theme";
import media from "@styles/media";
import config from "../config";
import GithubIcon from "@components/icons/github";
import LinkedinIcon from "@components/icons/linkedin";
import InstagramIcon from "@components/icons/instagram";

const StyledIcon = styled.a`
    padding: 10px 0;
    & svg {
        transition: ${theme.transition};
    }

    &:hover {
        & svg {
            fill: var(--accent-color);
            transform: rotate(10deg) translateY(-3px);
        }
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

const StyledLeft = styled.div`
    padding: 0 30px;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    bottom: 0;
    left: 0;
    ${media.tablet`
        display: none;
    `}
`;

const Line = styled.div`
    height: 100px;
    width: 2px;
    margin-top: 20px;
    background: var(--text-color-secondary);
`;

const Left = () => {
    return (
        <StyledLeft>
            {socials}
            <Line />
        </StyledLeft>
    );
};

export default Left;
