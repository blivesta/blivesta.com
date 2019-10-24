import * as React from 'react';
import Helmet from 'react-helmet';
import { useSiteMetadata } from '../../../hooks/use-site-metadata';

interface SeoProps {
  description?: string;
  title: string;
  location?: string;
}

function Seo(props: SeoProps) {
  const { title, description, author, siteUrl } = useSiteMetadata();
  const metaDescription = props.description || description;
  const isHome = props.location === '/';

  return (
    <Helmet title={props.title} titleTemplate={isHome ? `${title} | %s` : `%s | ${title}`}>
      <html lang="ja" />
      <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover" />
      <meta name="description" content={metaDescription} />
      <meta name="thumbnail" content={`${siteUrl}/icons/icon-512x512.png`} />
      <meta property="og:locale" content="ja" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={isHome ? `${title} | ${props.title}` : `${props.title} | ${title}`} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={`${siteUrl}${props.location}`} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={`${siteUrl}/icons/icon-512x512.png`} />
      <meta property="og:image:secure_url" content={`${siteUrl}/icons/icon-512x512.png`} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${siteUrl}/icons/icon-512x512.png`} />
    </Helmet>
  );
}

export default Seo;
