const config = require("./src/config");
const path = require(`path`);

module.exports = {
    siteMetadata: {
        title: config.siteTitle,
        description: config.siteDescription,
        author: config.name,

        siteMetadata: {
            title: config.siteTitle,
            siteUrl: config.siteUrl,
            description: config.siteDescription,
        },
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: "gatsby-plugin-use-dark-mode",
            options: {
                classNameDark: "dark-mode",
                classNameLight: "light-mode",
                storageKey: "darkMode",
                minify: true,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "content",
                path: `${__dirname}/content/`,
            },
        },
        // {
        //     resolve: "gatsby-source-filesystem",
        //     options: {
        //         name: "posts",
        //         path: `${__dirname}/content/blog`,
        //     },
        // },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/logo.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
