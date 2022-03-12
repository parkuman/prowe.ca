import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import config from "../config";
import DarkToggle from "@components/DarkToggle";
import Burger from "@components/Burger";
import Logo from "@images/logo.png";
import theme from "@styles/theme";
import media from "@styles/media";
import { OutlineButton } from "@components/Buttons";



const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 40px;
    z-index: 100000000;
    background: var(--bg-color);
    height: ${({ scrollDirection }) =>
        scrollDirection === "none" ? "100px" : "60px"};
    box-shadow: ${({ scrollDirection }) =>
        scrollDirection === "up"
            ? `0 10px 30px -10px rgba(0, 0, 0, 0.3)`
            : "none"};
    transform: translateY(
        ${({ scrollDirection }) =>
            scrollDirection === "down" ? "-60px" : "0px"}
    );

    transition: ${theme.transition};
    font-family: ${theme.fonts.IBMPlexMono};

    ${media.phone`
        padding: 10px;
    `}
`;

const StyledNavItems = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    & li {
        display: inline;
        padding: 0 10px;
        &:last-of-type {
            margin-right: 10px;
        }

        ${media.tablet`
            padding: 30px 0;
        `}
    }

    ${media.tablet`
        /* display: none; */
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 40vw;
        padding: 0 20px;
        flex-flow: column nowrap;
        align-items: flex-start;
        background-color: var(--bg-color);
        box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
        transition: ${theme.transition};

        transform: ${({ open }) =>
            open ? "translateX(0)" : "translateX(100%)"};
    `}

    ${media.phone`
        width: 90vw;
        align-items: center;
    `}
`;

const StyledNumber = styled.span`
    color: var(--accent-color);
`;

const StyledLogo = styled.img`
    height: 60px;
    filter: var(--logo-color);
`;

const NavItems = ({ open, setOpen }) => {
    return (
        <StyledNavItems open={open}>
            <DarkToggle />
            {config.navLinks.map((item, i) => (
                <li key={i}>
                    <StyledNumber>0{i + 1}. </StyledNumber>
                    <Link onClick={() => setOpen(false)} to={item.url}>
                        {item.name}
                    </Link>
                </li>
            ))}
            <OutlineButton href="prowe_resume.pdf">Resume</OutlineButton>
            <div className="underbar"></div>
        </StyledNavItems>
    );
};

const Nav = () => {
    const [open, setOpen] = useState(false);

    const [scrollDirection, setScrollDirection] = useState("none");

    const [prevScrollPosition, setPrevScrollPosition] = useState(0);

    useEffect(() => {
        setTimeout(
            () =>
                window.addEventListener("scroll", () =>
                    handleScroll()
                ),
            100
        );

        return () => window.removeEventListener("scroll", () => handleScroll());
    }, []);


    const handleScroll = () => {
        const currentScrollPosition = window.scrollY;
        const diff = prevScrollPosition - currentScrollPosition;



        if (diff > 0) {
            setScrollDirection("down");
        } else if (diff < 0) {

            setScrollDirection("up");
        } else {

            setScrollDirection("none");
        }

        
    };

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    // https://codesandbox.io/s/outside-alerter-hooks-lmr2y?module=/src/OutsideAlerter.js&file=/src/OutsideAlerter.js:680-899
    // for closing the menu when user clicks outside of the nav
    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpen(false);
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    return (
        <StyledNav ref={wrapperRef} scrollDirection={scrollDirection}>
            <Link to="/">
                <StyledLogo src={Logo} alt="logo" />
            </Link>
            <Burger open={open} setOpen={setOpen} />
            <NavItems open={open} setOpen={setOpen} />
        </StyledNav>
    );
};

export default Nav;
