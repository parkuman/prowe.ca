import React from "react";
import useDarkMode from "use-dark-mode";
import styled from "styled-components";

const StyledButton = styled.button`
    display: inline;
    cursor: pointer;
    outline: none;
`;

const Dark = (props) => {
    /* // If the `onClick` prop exists, call it with 'dark' */
    const handleClick = () => props.onClick && props.onClick("dark");

    return (
        <StyledButton onClick={handleClick} >
            <span role="img" aria-label="dark mode">
                🌚
            </span>
        </StyledButton>
    );
};

const Light = (props) => {
    // If the `onClick` prop exists, call it with 'dark'
    const handleClick = () => props.onClick && props.onClick("light");

    return (
        <StyledButton onClick={handleClick}>
            <span role="img" aria-label="light mode">
                🌞
            </span>
        </StyledButton>
    );
};

const DarkToggle = () => {
    // Instantiate with the default behavior, in this case, it defaults to light-mode
    // This places "light-mode" class on document.body, as outlined in my gatsby-config.js
    const darkMode = useDarkMode(false);

    // Custom function that handles the toggling
    // When called, it replaces the class on document.body and holds it in localStorage
    const handleTheme = (theme) => {
        // this section allows for a smooth transition between light and dark mode, also preventing flickering on page load
        document.body.classList.add("smooth-transition");
        setTimeout(
            () => document.body.classList.remove("smooth-transition"),
            1000
        );
        theme === "dark" ? darkMode.enable() : darkMode.disable();
    };

    return (
        <div style={{ display: "inline-block" }}>
            <Dark onClick={handleTheme} />
            <Light onClick={handleTheme} />
        </div>
    );
};

export default DarkToggle;
