import React from "react";
import {Helmet} from "react-helmet";

export const SEO = ({description, title}) => {
    const metaDescription = description.toString() || 'Website for Team 2/4 of IMGD 4000 and IMGD 4500 for WPI'
    const metaTitle = title.toString()
    return(
        <Helmet
            title={metaTitle}
            titleTemplate={`%s | Team 2/4`}
            defaultTitle={`Team 2/4`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: metaTitle || `Team 2/4`,
                },
                {
                    property: `og:url`,
                    content: `https://2-4.netlify.com/`,
                },
                {
                    property: `twitter:url`,
                    content: `https://2-4.netlify.com/`,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: 'website',
                },
                {
                    name: `twitter:card`,
                    content: 'summary_large_image',
                },
                {
                    name: `og:image`,
                    content: 'https://raw.githubusercontent.com/team2-4/2-4/master/src/media/images/rhythmofthenight.jpg',
                },
                {
                    name: `twitter:image`,
                    content: 'https://raw.githubusercontent.com/team2-4/2-4/master/src/media/images/rhythmofthenight.jpg',
                },
                {
                    name: `twitter:title`,
                    content: metaTitle || `Team 2/4`,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ]}
        />
    )
}