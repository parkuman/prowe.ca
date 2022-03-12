import { css } from "styled-components";

import IBMPlexMonoRegularTTF from "@fonts/IBM_Plex_Mono/IBMPlexMono-Regular.ttf";
import IBMPlexSansRegularTTF from "@fonts/IBM_Plex_Sans/IBMPlexSans-Regular.ttf";

const FontFaces = css`
    @font-face {
        font-family: "IBMPlexSans";
        src: url(${IBMPlexSansRegularTTF}) format("truetype");
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: "IBMPlexMono";
        src: url(${IBMPlexMonoRegularTTF}) format("truetype");
        font-weight: 400;
        font-style: normal;
    }
`;

export default FontFaces;
