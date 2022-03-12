import React from "react";
import styled from "styled-components";

import media from "@styles/media";
import theme from "@styles/theme";
import config from "../config";

const StyledRight = styled.div`
    padding: 0 30px;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    bottom: 0;
    right: 0;
    ${media.tablet`
        display: none;
    `}

    & a {
        writing-mode: vertical-rl;
        text-orientation: mixed;
        color: var(--text-color-secondary);
        font-family: ${theme.fonts.IBMPlexMono};
    }
`;

const Line = styled.div`
    height: 100px;
    width: 2px;
    margin-top: 20px;
    background: var(--text-color-secondary);
`;

const Right = () => {
    return (
        <StyledRight>
            <a href={"mailto:" + config.email}>{config.email}</a>
            <Line />
        </StyledRight>
    );
};

export default Right;
