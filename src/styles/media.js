// https://github.com/bchiang7/v4/blob/master/src/styles/media.js a great way to handle media in React and Gatsby

import { css } from "styled-components";

const sizes = {
    desktop: 1000,
    tablet: 768,
    // phone: 376,
    phone: 500,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[label] / 16;
    accumulator[label] = (...args) => css`
        @media (max-width: ${emSize}em) {
            ${css(...args)};
        }
    `;
    return accumulator;
}, {});

export default media;
