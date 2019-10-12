import * as React from 'react';

import Layout from '../components/templates/layout';
import SEO from '../components/atoms/seo';
import ContentBlock from '../components/molecules/content-block';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Not found" />
    <ContentBlock id="notFound" title="NOT FOUND">
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </ContentBlock>
  </Layout>
);

export default NotFoundPage;
