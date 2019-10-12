import * as React from 'react';

import Layout from '../components/templates/layout';
import SEO from '../components/atoms/seo';
import ContentBlock from '../components/molecules/content-block';
import ContentTitle from '../components/atoms/content-title';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Not found" />
    <ContentBlock id="notFound" title="NOT FOUND">
      <ContentTitle>You just hit a route that doesn&#39;t exist... the sadness.</ContentTitle>
    </ContentBlock>
  </Layout>
);

export default NotFoundPage;
