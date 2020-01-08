import * as React from 'react';
import Helmet from 'react-helmet';
import useSiteMetadata from '../../../hooks/useSiteMetadata';

interface SeoProps {
  pageDescription?: string;
  pageTitle: string;
  pageLocation?: string;
}

function Seo(props: SeoProps) {
  const { title, description, author, siteUrl } = useSiteMetadata();
  const { pageDescription, pageTitle, pageLocation } = props;
  const metaDescription = pageDescription || description;
  const isHome = pageLocation === '/';

  return (
    <Helmet title={pageTitle} titleTemplate={isHome ? `${title} | %s` : `%s | ${title}`}>
      <html lang="ja" />
      <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover" />
      <meta name="description" content={metaDescription} />
      <meta name="google-site-verification" content="9Ja4n5uhvlfhdrnEG9gDR1bknvUu-6e15raExui_P9U" />
      <meta name="thumbnail" content={`${siteUrl}/icons/icon-512x512.png`} />
      <meta property="og:locale" content="ja" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={isHome ? `${title} | ${pageTitle}` : `${pageTitle} | ${title}`} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={`${siteUrl}${pageLocation}`} />
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
