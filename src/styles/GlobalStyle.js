import theme from "@styles/theme";
import FontFaces from "@styles/fonts";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
${FontFaces};

html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }


*,
*:before,
*:after {
   box-sizing: inherit;
}
body {
    --bg-color: ${theme.colors.almostWhite};
    --text-color-primary: ${theme.colors.almostBlack};
    --text-color-secondary: ${theme.colors.lightGrey};
    --accent-color: ${theme.colors.purple};
    --logo-color: invert(0%); /* this makes it appear black (like normal) */

    display: flex;
    flex-direction: column;
    margin: 0;
    width: 100%;
    min-height: 100%;
    font-family: ${theme.fonts.IBMPlexSans};
    background: var(--bg-color);
    color: var(--text-color-primary);


    &.smooth-transition * {
        transition: ${theme.transition};
    }
    &.dark-mode {
        --bg-color: ${theme.colors.darkGrey};
        --text-color-primary: ${theme.colors.almostWhite};
        --accent-color: ${theme.colors.aquaMarine};
        --logo-color: invert(100%); /* this makes it appear white for dark mode */
        --text-color-secondary: ${theme.colors.lightGrey};

    } 

    
    
    
} 

a {
    text-decoration: none;
    color: var(--text-color-primary);
}

a:hover {
    color: var(--accent-color);
}

button {
    border: none;
    background: none;
    color: var(--accent-color);
    border-color: var(--accent-color);
    font-family: ${theme.fonts.IBMPlexMono};
}


`;

export default GlobalStyle;
