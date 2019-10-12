/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  description: string;
  title: string;
  lang: string;
  meta: any[];
  location?: string;
}

function SEO({ description, lang, meta, title, location }: SEOProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  const isHome = location === '/';

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={isHome ? `${site.siteMetadata.title} | %s` : `%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `thumbnail`,
          content: `/icons/icon-512x512.png`,
        },
        {
          property: `og:local`,
          content: lang,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:title`,
          content: isHome ? `${site.siteMetadata.title} | ${title}` : `${title} | ${site.siteMetadata.title}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:image`,
          content: `/icons/icon-512x512.png`,
        },
        {
          property: `og:image:secure_url`,
          content: `/icons/icon-512x512.png`,
        },
        {
          property: `og:image:width`,
          content: `512`,
        },
        {
          property: `og:image:height`,
          content: `512`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: `/icons/icon-512x512.png`,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `ja`,
  meta: [],
  description: ``,
};

export default SEO;
