import React from "react";
import styled from "styled-components";
import theme from "@styles/theme";
import media from "@styles/media";

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    margin-right: 10px;
    z-index: 100000001;   

    display: none;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;

    & div {
        width: 2rem;
        height: 0.25rem;
        background-color: var(--text-color-primary);
        border-radius: 10px;

        &::selection {
            display: none;
        }

        transition: ${theme.transition};

        &:nth-child(1) {
            transform: ${({ open }) =>
                open
                    ? " translateY(0.65rem) rotate(45deg)"
                    : " translateY(0) rotate(0)"};

        }

        &:nth-child(2) {
            /* transform: ${({ open }) =>
                open ? "translateX(100%)" : "translateX(0)"}; */
            opacity: ${({ open }) => (open ? "0" : "1")};
        }

        &:nth-child(3) {
            transform: ${({ open }) =>
                open
                    ? "translateY(-0.65rem) rotate(-45deg) "
                    : " translateY(0) rotate(0)"};
        }
    }

    ${media.tablet`
        display: flex;
    `}
`;

const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    );
};

export default Burger;
