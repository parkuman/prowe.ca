/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import GlobalStyle from "@styles/GlobalStyle";



const Layout = ({ children, data }) => {
    return (
        <div id="root">
            <GlobalStyle />

            <main>{children}</main>
        </div>
    );
};

export default Layout;
